import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();


export function authProvider({children}){
    const [isAuth,setIsAuth] = useState(()=>{
        return localStorage.getItem("auth") === "true";
    })

    useEffect(() => {
      if (isAuth) {
        localStorage.setItem("auth", "true");
      } else {
        localStorage.removeItem("auth");
      }
    }, [isAuth]);

    useEffect(() => {
      const handleStorageChange = () => {
        setIsAuth(localStorage.getItem("auth") === "true");
      };
      window.addEventListener("storage", handleStorageChange);
      return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    // const getCurrrentLoggedUser = ()=>{
    //     const currentLoggedUser = localStorage.getItem("registered");
    //     const registeredUser = JSON.parse(currentLoggedUser);
    // } 

    const loginUser = (username,password)=>{
        const registeredData = localStorage.getItem("registeredUser");
        const registeredUser = JSON.parse(registeredData);

        if(!registeredUser[username]){
            return {
                success:false,
                error:"User Does not Exist, Please Signup First"
            }
        }
        if(password !==registeredUser[username]){
            return {
                success:false,
                error:"Entered Incorrect Password"
            }
        }
        setIsAuth(true);
        return {success:true}
    }
    const loginAdmin = (username, password) => {
      const registeredData = localStorage.getItem("registeredAdmin");
      const registeredUser = JSON.parse(registeredData);

      if (!registeredUser[username]) {
        return {
          success: false,
          error: "User Does not Exist, Please Signup First",
        };
      }
      if (password !== registeredUser[username]) {
        return {
          success: false,
          error: "Entered Incorrect Password",
        };
      }
      setIsAuth(true);
      return { success: true };
    };

    const signupUser = (username,password, confirmPassword)=>{
        if(password!=confirmPassword){
            return {success:false, error:"Password And confirm password not match"};
        }
        const registeredData = localStorage.getItem("registeredUser");
        const registeredUser = JSON.parse(registeredData) || {};
        if (registeredUser[username]) {
          return {
            success: false,
            error: "user already exists",
          };
        }
        registeredUser[username] = password;
        localStorage.setItem("registeredUser", JSON.stringify(registeredUser));
        return { success: true };
    }

    const signupAdmin = (username, password, confirmPassword) => {
      if (password != confirmPassword) {
        return {
          success: false,
          error: "Password And confirm password not match",
        };
      }
      const registeredData = localStorage.getItem("registeredAdmin");
      const registeredUser = JSON.parse(registeredData) || {};
      if (registeredUser[username]) {
        return {
          success: false,
          error: "user already exists",
        };
      }
      registeredUser[username] = password;
      localStorage.setItem("registeredAdmin", JSON.stringify(registeredUser));
      return { success: true };
    };


    return 
}
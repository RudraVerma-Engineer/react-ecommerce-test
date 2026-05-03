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
        const registeredData = localStorage.getItem("registered");
        const registeredUser = JSON.parse(registeredData);
    }
}
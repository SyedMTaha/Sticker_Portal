import { createContext, useState,useContext,useEffect } from "react";
import {auth,provider } from '../firebase';

const AddContext = createContext();

export function useLocalContext(){
    return useContext(AddContext);
}

export function ContextProvider({children}){
    const [loggedInUser,setLoggedInUser] = useState(null);    
    const [loggedInMail,setLoggedInMail]=useState(null);
    const [admin,setAdmin]=useState(null);

    useEffect(()=>{
        const unsubscribe =auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                setLoggedInMail(authUser.email);
                setLoggedInUser(authUser)
            }
            else{
                setLoggedInUser(null);
                setLoggedInMail(null);
            }
        });

        return()=>{
            unsubscribe();
        }
    },[])

    const value = { 
        loggedInMail,
        setLoggedInMail,
        loggedInUser,
        setLoggedInUser,
        admin,
        setAdmin
     };

    return <AddContext.Provider value={value} >{children}</AddContext.Provider>;
}

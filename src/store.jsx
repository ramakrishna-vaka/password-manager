import { createContext, useReducer } from "react";


export const PasswordsContext=createContext({passwords:[],add:()=>{},deleteP:()=>{}});

function passwordsReducer(passwords,action){
    let newPasswords=passwords;
    if(action.type==="ADD"){
        newPasswords=[action.payload,...passwords];
    }else if(action.type==="DELETE"){
      newPasswords=passwords.filter(item=>item!==action.payload);
    }
    return newPasswords;
}
function PasswordsContextProvider({children}){

    let defaultPasswords=["1234","abcd1234","password"];
    function deleteP(val){
       let newAction={
        type:"DELETE",
        payload:val,
       };
       dispatchNewPasswords(newAction);
        console.log(val); 
    }
    let [passwords,dispatchNewPasswords]=useReducer(passwordsReducer,defaultPasswords);
    function add(val){
        let newAction={
            type:"ADD",
            payload:val,
        };
        dispatchNewPasswords(newAction);
        console.log(val);   
    }
    return <PasswordsContext.Provider value={{passwords,add,deleteP}}>
        {children}
    </PasswordsContext.Provider>
}

export default PasswordsContextProvider;
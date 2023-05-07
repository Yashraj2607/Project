import {createContext ,useState}from "react"

export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const[authState,setIsAuthState]=useState({
        isAuth:false,
        token:null,
    })
    const loginUser=(token)=>{
        setIsAuthState({
            isAuth:true,
            token:token,
           
        })
    }
    const logoutUser=()=>{
        setIsAuthState({isAuth:false,token:null})
    }
    return(
        <AuthContext.Provider value={{authState,loginUser,logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
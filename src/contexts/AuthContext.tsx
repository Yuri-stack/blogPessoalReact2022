import { createContext, ReactNode, useState } from 'react'
import UserLogin from '../models/UserLogin'

interface AuthContextProps{
    user: UserLogin
    setUser: (user: UserLogin) => void
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){

    const [user, setUser] = useState<UserLogin>({} as UserLogin)

    return(
        <AuthContext.Provider value={{ user, setUser }}>
            { children }
        </AuthContext.Provider>
    )
}
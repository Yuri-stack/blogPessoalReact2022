import { createContext, ReactNode, useState } from 'react'
import UserLogin from '../models/UserLogin'
import { login } from '../services/Services'

interface AuthContextProps {
    user: UserLogin
    handleLogout(): void
    handleLogin(user: UserLogin): Promise<void>
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    async function handleLogin(userLogin: UserLogin) {
        try {
            await login(`/usuarios/logar`, userLogin, setUser)
            alert("Usuário logado com sucesso")

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
        }
    }

    function handleLogout() {
        setUser({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }
    
    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
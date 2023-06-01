import { ReactNode, createContext, useState } from "react"

export interface AuthContextType {
  user: any // 用户名
  token: any
  signIn: (user: string, token: string, callback: VoidFunction) => void
  signOut: (callback: VoidFunction) => void
}

export let AuthContext = createContext<AuthContextType | null>(null)

const fakeAuthProvider = {
  isAuthenticated: false,
  signIn(callback: VoidFunction) {
    this.isAuthenticated = true
    setTimeout(callback, 100)
  },
  signOut(callback: VoidFunction) {
    this.isAuthenticated = false
    setTimeout(callback, 100)
  },
}

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(localStorage.getItem("user"))
  const [token, setToken] = useState<any>(localStorage.getItem("TOKEN"))

  let signIn = (newUser: string, newToken: string, callback: VoidFunction) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser)
      setToken(newToken)
      callback()
    })
  }

  let signOut = (callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null)
      setToken("")
      localStorage.removeItem("user")
      localStorage.removeItem("TOKEN")
      callback()
    })
  }

  return (
    <AuthContext.Provider value={{ user, token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

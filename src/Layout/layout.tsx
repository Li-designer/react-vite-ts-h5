import { useContext } from "react"
import { useNavigate, Link, Outlet } from "react-router-dom"
import {
  AuthContext,
  AuthContextType,
} from "@/container/AuthProvider/authProvider"

const useAuth = () => useContext(AuthContext)

const AuthStatus = () => {
  let auth = useAuth()
  let { user, signOut } = auth as AuthContextType
  let navigate = useNavigate()

  if (!user) return <p>没有登录</p>
  return (
    <>
      <p>你好 {user}! </p>
      <button onClick={() => signOut(() => navigate("/login"))}>退出</button>
    </>
  )
}

const Layout = () => {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">公共页面</Link>
        </li>
        <li>
          <Link to="/protected">受保护页面</Link>
        </li>
      </ul>
      {/* 嵌套路由 */}
      <Outlet />
    </div>
  )
}

export default Layout

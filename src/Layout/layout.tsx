import { useContext } from "react"
import { useNavigate, Link, Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
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
      <Button color="danger" onClick={() => signOut(() => navigate("/login"))}>
        退出
      </Button>
    </>
  )
}

const Layout = () => {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/protected">另一个页面</Link>
        </li>
      </ul>
      {/* 嵌套路由 */}
      <Outlet />
    </div>
  )
}

export default Layout

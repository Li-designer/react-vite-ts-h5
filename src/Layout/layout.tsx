import { useContext } from "react"
import { useNavigate, Link, Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
import s from "./style.module.less"
import {
  AuthContext,
  AuthContextType,
} from "@/container/AuthProvider/authProvider"
import TabBar from "@/Layout/tabBar/tabBar"

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
    <div className={s.layOut}>
      <AuthStatus />
      {/* 嵌套路由 */}
      <Outlet />
      <TabBar></TabBar>
    </div>
  )
}

export default Layout

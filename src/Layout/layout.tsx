import { useContext } from "react"
import { useNavigate, Link, Outlet } from "react-router-dom"
import { Avatar, Button, List } from "antd-mobile"
import s from "./style.module.less"
import {
  AuthContext,
  AuthContextType,
} from "@/container/AuthProvider/authProvider"
import TabBar from "@/Layout/tabBar/tabBar"

const useAuth = () => useContext(AuthContext)
const demoAvatarImages = [
  "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
  "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
]

const AuthStatus = () => {
  let auth = useAuth()
  let { user, signOut } = auth as AuthContextType
  let navigate = useNavigate()

  const layOut = () => {
    localStorage.removeItem("tabBar")
    signOut(() => navigate("/login"))
  }

  if (!user) return <p>没有登录</p>
  return (
    <>
      <List className={s.headTop}>
        <List.Item
          prefix={<Avatar src={demoAvatarImages[0]} />}
          description="Deserunt dolor ea eaque eos"
        >
          {user}
        </List.Item>
        <List.Item>
          <Button color="danger" onClick={layOut}>
            退出
          </Button>
        </List.Item>
      </List>
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

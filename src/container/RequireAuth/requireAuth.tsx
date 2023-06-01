import { useContext } from "react"
import { useLocation, Navigate } from "react-router-dom"
import {
  AuthContext,
  AuthContextType,
} from "@/container/AuthProvider/authProvider"

/**
 *
 * @description 对登录状态进行验证成功返回子页面否则返回登录
 */

const useAuth = () => useContext(AuthContext)

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth()
  let { user } = auth as AuthContextType
  let location = useLocation()


  if (!user) return <Navigate to="/login" state={{ from: location }} replace />

  return children
}

export default RequireAuth

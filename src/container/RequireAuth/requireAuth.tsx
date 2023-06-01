import { useContext } from "react"
import { useLocation, Navigate } from "react-router-dom"
import { Toast } from "antd-mobile"
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
  let { user, token } = auth as AuthContextType
  let location = useLocation()

  useEffect(() => {
    if (!user || !token) {
      Toast.show({
        content: "请先登录~~",
      })
    }
  }, [!user, !token])

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default RequireAuth

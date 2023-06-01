import { Form, Input, Button } from "antd-mobile"
import s from "./style.module.less"
import {
  AuthContext,
  AuthContextType,
} from "@/container/AuthProvider/authProvider"

const useAuth = () => useContext(AuthContext)

const Login = () => {
  const navigate = useNavigate()
  let auth = useAuth()
  let { signIn } = auth as AuthContextType

  const onFinish = (values: any) => {
    signIn(values.username, () => navigate("/", { replace: true }))
  }

  return (
    <>
      <div className={s.login}>
        <img src="/img/boy-party-popper.png" alt="" className={s.image} />
        <div className={s.welcome}>
          <p>Hi,</p>
          <p>👏🏻欢迎登录~</p>
        </div>
        <Form
          className={s.formLogin}
          layout="horizontal"
          mode="card"
          onFinish={onFinish}
          footer={
            <Button block type="submit" color="primary" size="middle">
              提交
            </Button>
          }
        >
          <Form.Item name="username" label="用户名">
            <Input placeholder="随便输入" />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input placeholder="随便输入" />
          </Form.Item>
        </Form>
        <div className={s.desc}>
          <a href="https://iconscout.com/3ds/boy" target="_blank">
            Free Boy Exploding Party Popper 3D Illustration
          </a>{" "}
          by{" "}
          <a href="https://iconscout.com/contributors/iconscout">
            IconScout Store
          </a>{" "}
          on <a href="https://iconscout.com">IconScout</a>
        </div>
      </div>
    </>
  )
}
export default Login

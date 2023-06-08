import { Form, Input, Button } from "antd-mobile"
import s from "./style.module.less"
import imgBoy from "./img/boy-party-popper.png"
import {
  AuthContext,
  AuthContextType,
} from "@/container/AuthProvider/authProvider"
import store from "@/store/reducers"
import { toggleTabBar } from "@/store/actions"

const useAuth = () => useContext(AuthContext)

const Login = () => {
  const navigate = useNavigate()
  let auth = useAuth()
  let { signIn } = auth as AuthContextType

  const onFinish = (values: any) => {
    const Token = "11111111111111122222222222222"
    localStorage.setItem("user", values.username)
    localStorage.setItem("TOKEN", Token)
    store.dispatch(toggleTabBar("home"))
    signIn(values.username, Token, () => navigate("/", { replace: true }))
  }

  return (
    <>
      <div className={s.login}>
        <img src={imgBoy} alt="" className={s.image} />
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

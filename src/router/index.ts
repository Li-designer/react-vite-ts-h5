
import Home from "@/container/Home/home"
import Login from "@/container/Login/login"
import Protected from '@/container/Protected/protected'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/protected",
    component: Protected,
  }
]

export default routes

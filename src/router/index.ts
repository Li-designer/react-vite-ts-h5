
import Home from "@/container/Home/home"
import Login from "@/container/Login/login"
import AccountBook from '@/container/AccountBook/accountBook'
import Graphic from '@/container/Graphic/graphic'
import Personal from '@/container/Personal/personal'
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
    path: "/accountBook",
    component: AccountBook,
  },
  {
    path: "/graphic",
    component: Graphic,
  },
  {
    path: "/personal",
    component: Personal,
  },
]

export default routes

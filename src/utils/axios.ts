import axios from "axios"
import { RESTFUL_ERROR_CODE_MAP } from "@/utils"
import { Toast } from "antd-mobile"

const MODE = import.meta.env.VITE_ENV // 环境变量

axios.defaults.baseURL = MODE == "dev" ? "/api" : "/"
axios.defaults.withCredentials = true
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest"
axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("TOKEN") || null
  }`
axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.response.use(
  (response) => {
    const code = Number(response.data.code)
    const msg: string = RESTFUL_ERROR_CODE_MAP[code]
    if (msg) {
      if (code !== 200) {
        setTimeout(() => {
          Toast.show({
            content: response.data.message,
          })
        }, 500)
      }
      return Promise.reject(new Error(response.data.message || msg))
    } else {
      return response.data
    }
  },
  (thrown) => {
    const status = thrown.response.status
    if (status === 401) {
      // 跳转登录页
      Navigate({ to: "/login" })
      setTimeout(() => {
        Toast.show({
          content: thrown.response.data.message,
        })
      }, 500)
    }
    return Promise.reject(thrown)
  }
)

export default axios

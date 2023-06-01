import axios from "axios"
import { RESTFUL_ERROR_CODE_MAP } from "@/utils"
import { Toast } from "react-vant"

const MODE = import.meta.env.VITE_ENV // 环境变量

axios.defaults.baseURL = MODE == "dev" ? "/api" : "/"
axios.defaults.withCredentials = true
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest"
axios.defaults.headers["Authorization"] = `Bearer ${
  localStorage.getItem("token") || null
}`
axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.response.use(
  (response) => {
    const code = Number(response.data.code)
    const msg: string = RESTFUL_ERROR_CODE_MAP[code]
    if (msg) {
      if (code !== 200) {
        setTimeout(() => {
          Toast.info({ message: response.data.message })
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
      window.location.href = `$location.origin}/#/login`
      setTimeout(() => {
        Toast.info({ message: thrown.response.data.message })
      }, 500)
    }
    return Promise.reject(thrown)
  }
)

export default axios

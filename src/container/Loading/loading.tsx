import s from "./style.module.less"
import { useLoading } from "@/context/LoadingContext"
import { DotLoading } from "antd-mobile"
const GlobalLoading = () => {
  const { loading } = useLoading()

  return loading ? (
    <div className={s.loadingBox}>
      <div style={{ color: "#4C64FE", fontSize: "25px" }}>
        <DotLoading color="currentColor" />
      </div>
    </div>
  ) : null
}

export default GlobalLoading

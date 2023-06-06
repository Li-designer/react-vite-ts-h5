import s from "./style.module.less"
import { DotLoading } from "antd-mobile"
const GlobalLoading = () => {
  return (
    <div className={s.loadingBox}>
      <div style={{ color: "#4C64FE", fontSize: "25px" }}>
        <DotLoading color="currentColor" />
      </div>
    </div>
  )
}

export default GlobalLoading

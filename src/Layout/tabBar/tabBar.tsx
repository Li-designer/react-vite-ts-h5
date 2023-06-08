import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons"
import { TabBar as AntdTabBar } from "antd-mobile"
import store from "@/store/reducers"
import { toggleTabBar } from "@/store/actions"
import { useSelector } from "react-redux"
import { getStateTabBar } from "@/store/getters"

const TabBar = () => {
  const navigate = useNavigate()
  const state = useSelector(getStateTabBar)
  const [activeKey, setActiveKey] = useState("home")

  const tabs = [
    {
      key: "todo",
      title: "账本",
      icon: <UnorderedListOutline />,
      path: "/accountBook",
    },
    {
      key: "home",
      title: "统计",
      icon: <AppOutline />,
      path: "/",
    },
    {
      key: "personalCenter",
      title: "个人中心",
      icon: <UserOutline />,
      path: "/personal",
    },
  ]
  useEffect(() => {
    if (state) {
      setActiveKey(state)
    }
  }, [activeKey])
  // tab页切换
  const getChange = (key: string) => {
    const arr = tabs.filter((item) => item.key === key)
    setActiveKey(key)
    localStorage.setItem("tabBar", key)
    store.dispatch(toggleTabBar(key))
    if (arr.length) {
      navigate(arr[0].path, { replace: true })
    }
  }

  return (
    <>
      <AntdTabBar activeKey={activeKey} onChange={getChange}>
        {tabs.map((item) => (
          <AntdTabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </AntdTabBar>
    </>
  )
}

export default TabBar

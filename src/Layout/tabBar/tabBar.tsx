import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons"
import { TabBar as AntdTabBar } from "antd-mobile"

const TabBar = () => {
  const navigate = useNavigate()
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
      path: "/graphic",
    },
    {
      key: "personalCenter",
      title: "个人中心",
      icon: <UserOutline />,
      path: "/personal",
    },
  ]
  // tab页切换
  const getChange = (key: string) => {
    const arr = tabs.filter((item) => item.key === key)
    setActiveKey(key)
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

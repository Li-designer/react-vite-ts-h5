import { useRequest } from "ahooks"
import { useLoading } from "@/context/LoadingContext"

const Home = () => {
  const [data, setData] = useState<null | any>(null)
  const { showLoading, hideLoading } = useLoading()

  const { loading } = useRequest(async () => {
    /* 异步模拟 */
    return new Promise<string>((resolve: any, reject) => {
      setTimeout(
        () =>
          resolve({
            data: {
              name: "lj",
              role: "Admin",
            },
          }),
        2000
      )
    })
  })
  useEffect(() => {
    if (loading) {
      showLoading()
    } else {
      hideLoading()
    }
  }, [loading])
  return <>统计</>
}
export default Home

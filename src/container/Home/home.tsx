import { Button } from "antd-mobile"
import { useRequest } from "ahooks"
import Loading from "@/container/Loading/loading"

const Home = () => {
  const [data, setData] = useState<null | any>(null)

  const res = useRequest(async () => {
    // const res = await api();
    // if (res) {
    //   return res;
    // }
    // return {};
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
  if (res.loading) {
    return <Loading></Loading>
  }
  return (
    <>
      <Button block color="primary" size="large">
        Block Button
      </Button>
    </>
  )
}
export default Home

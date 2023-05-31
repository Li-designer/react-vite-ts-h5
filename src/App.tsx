import "./App.css"
import routes from "./router"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  )
}

export default App

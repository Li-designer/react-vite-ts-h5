import "./App.css"
import routes from "./router"
import AuthProvider from "./container/AuthProvider/authProvider"
import Login from "./container/Login/login"
import Layout from "./Layout/layout"
import RequireAuth from "./container/RequireAuth/requireAuth"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path !== "/login" ? route.path : ""}
              element={
                <RequireAuth>
                  <route.component />
                </RequireAuth>
              }
            />
          ))}
        </Route>
        <Route key="/login" path="/login" element={<Login></Login>} />
      </Routes>
    </AuthProvider>
  )
}

export default App

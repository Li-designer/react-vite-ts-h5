import React from "react"
import ReactDOM from "react-dom/client"

import { HashRouter as Router } from "react-router-dom"
import App from "./App"
import "lib-flexible/flexible"
import "./index.css"
import store from "./store/reducers"
import { Provider } from "react-redux"
import { LoadingProvider } from "@/context/LoadingContext"
import GlobalLoading from "./container/Loading/loading"

ReactDOM.createRoot(document.getElementById("root") as any).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <LoadingProvider>
          <App />
          <GlobalLoading />
        </LoadingProvider>
      </Router>
    </React.StrictMode>
  </Provider>
)

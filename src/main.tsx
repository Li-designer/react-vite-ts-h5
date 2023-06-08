import React from "react"
import ReactDOM from "react-dom/client"

import { HashRouter as Router } from "react-router-dom"
import App from "./App"
import "lib-flexible/flexible"
import "./index.css"
import store from "./store/reducers"
import { Provider } from "react-redux"


ReactDOM.createRoot(document.getElementById("root") as any).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
)

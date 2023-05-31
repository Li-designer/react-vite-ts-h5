import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter as Router } from "react-router-dom"
import App from "./App"
import "lib-flexible/flexible"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as any).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

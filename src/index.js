import React from "react"
import ReactDOM from "react-dom"
// import dotenv from "dotenv"
import "tachyons"
import "./q.css"
import "fonts/texgyreadventor/style.css"
import "fonts/opensans/style.css"
import "animations/float.css"
import "animations/fade.css"
import "custom.css"

import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

// dotenv.config()

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()

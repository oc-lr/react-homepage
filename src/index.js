import React from "react"
import ReactDOM from "react-dom"
import "tachyons"
import "./q.css"
import "fonts/texgyreadventor/style.css"
import "fonts/opensans/style.css"
import "animations/float.css"
import "custom.css"

import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()

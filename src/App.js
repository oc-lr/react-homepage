import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Home } from "./Home"

const NotFound = () => <div>Not Found</div>

const basename =
  process.env["NODE_ENV"] === "production" ? "/react-homepage" : ""

export default class App extends React.Component {
  render() {
    return (
      <Router basename={basename}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

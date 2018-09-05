import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Home } from "./Home"

const NotFound = () => <div>Not Found</div>

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

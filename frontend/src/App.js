import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes";

const App = () => {

  const routes = useRoutes(true)

  return (
      <Router>
        <div>
          {routes}
        </div>
      </Router>
  )

}

export default App


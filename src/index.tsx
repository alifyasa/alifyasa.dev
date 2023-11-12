// @refresh reload
import { render } from 'solid-js/web'
import { Route, Router, Routes } from '@solidjs/router'

import './index.css'
import App from './App'

import { Contacts, Experiences, Home, Projects } from './pages'

const root = document.getElementById('root')

render(
  () => (
    <>
      <Router>
        <Routes>
          <Route path="/" component={App(Home)} />
          <Route path="/projects" component={App(Projects)} />
          <Route path="/experiences" component={App(Experiences)} />
          <Route path="/contacts" component={App(Contacts)} />
        </Routes>
      </Router>
    </>
  ),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  root!,
)

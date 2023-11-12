import { NavigationBar } from './components'
import './App.css'
import { type JSXElement } from 'solid-js'

function App(page: () => JSXElement) {
  return () => (
    <div class="max-w-3xl mx-auto font-mono">
      <NavigationBar />
      <div class="p-8 border border-gray-200 border-t-0">{page()}</div>
    </div>
  )
}

export default App

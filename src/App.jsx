import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import Running from './components/running'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main />
    </div>
    
  )
}

export default App

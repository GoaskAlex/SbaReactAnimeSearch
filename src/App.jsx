import { useState } from 'react'

import './App.css'
import AnimeApi from './AnimeApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnimeApi/>
    </>
  )
}

export default App

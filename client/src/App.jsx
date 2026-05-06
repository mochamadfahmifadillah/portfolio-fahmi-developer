import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loading />  

  return <Home />
}

export default App
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [refri, setRefri] = useState([])

  useEffect(() => {
    carregarRefri()
  },[])

  const carregarRefri = async () => {
    try {
      const res = await fetch(' http://localhost:3000/refri')
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <button></button>
  )
}

export default App

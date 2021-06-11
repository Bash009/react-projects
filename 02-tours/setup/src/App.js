import React, { useState, useEffect, createContext } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
export const sap = createContext()
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async () => {
    try {
      const response = await axios.get(url)
      const tours = response.data
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <sap.Provider value={{ removeTour }}>
      <main>
        <Tours tours={tours} />
      </main>
    </sap.Provider>
  )
}

export default App

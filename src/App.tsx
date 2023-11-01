import "./App.css"
import { useQuery } from "react-query"

interface Station {
  id: number
  station_name: string
  station_address: string
  coordinate_x: string
  coordinate_y: string
}

const App = () => {
  const getStations = async () => {
    const response: Response = await fetch(`http://localhost:3001/api/station`)
    const data = await response.json()
    return data
  }

  const { data, status } = useQuery(["stations"], () => getStations())

  const stations = status === "success" && data

  return (
    <main>
      <h1>🚲 Citybike stats 🚲</h1>
      <ul>
        {stations.map(({ id, station_name }: Station) => (
          <li key={id}>
            {id} {station_name}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App

import "./App.css"
import { useRef } from "react"
import useStations from "./hooks/useStations"

interface Station {
  id: number
  station_name: string
  station_address: string
  coordinate_x: string
  coordinate_y: string
}

const App = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const {data, isFetchingNextPage, status} = useStations(bottomRef)
  const pages = status === "success" && data?.pages

  return (
    <main>
      <h1>🚲 Citybike stats 🚲</h1>
      <ul>
        {pages &&
          pages.map((page) =>
            page.data.map(({ id, station_name }: Station) => (
              <li key={id}>
                {id} {station_name}
              </li>
            ))
          )}
      </ul>
      <p ref={bottomRef}>{isFetchingNextPage && "loading"}</p>
    </main>
  )
}

export default App

import "./App.css"
import { useRef } from "react"
import useStations, { Station } from "./hooks/useStations"
import StationList from "./components/StationList"

const App = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const {data, isFetchingNextPage, status} = useStations(bottomRef)
  const pages = status === "success" && data?.pages
  const stations: Station[] = pages ? pages.reduce((all, page)  => all.concat(page.data), []) : []

  return (
    <main>
      <h1>🚲 Citybike stats 🚲</h1>
      <StationList stations={stations} />
      <p ref={bottomRef}>{isFetchingNextPage && "loading"}</p>
    </main>
  )
}

export default App

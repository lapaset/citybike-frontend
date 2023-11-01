import "./App.css"
import { useRef } from "react"
import useStationList, { Station } from "./hooks/useStationList"
import StationList from "./components/StationList"
import { Outlet } from "react-router-dom"

const App = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const {data, isFetchingNextPage, status} = useStationList(bottomRef)
  const pages = status === "success" && data?.pages
  const stations: Station[] = pages ? pages.reduce((all, page)  => all.concat(page.data), []) : []

  return (
    <main>
      <h1>🚲 Citybike stats 🚲</h1>
      <Outlet />
      <StationList stations={stations} />
      <p ref={bottomRef}>{isFetchingNextPage && "loading"}</p>
    </main>
  )
}

export default App

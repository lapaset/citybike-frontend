import { QueryFunctionContext, useInfiniteQuery } from "react-query"
import "./App.css"
import { useEffect, useRef } from "react"
import { getInfiniteStations } from "./api/stations"


interface Station {
  id: number
  station_name: string
  station_address: string
  coordinate_x: string
  coordinate_y: string
}

const App = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ["stations"],
    (p: QueryFunctionContext) => getInfiniteStations(p.pageParam || 0),
    {
      getNextPageParam: (lastPage) => lastPage.nextMax,
      retry: 1,
    }
  )

  useEffect(() => {
    const handleScroll = () => {
      if (
        bottomRef.current &&
        bottomRef.current.getBoundingClientRect().bottom - 10 <=
          window.innerHeight &&
        hasNextPage &&
        !isLoading &&
        !isFetchingNextPage
      ) {
        fetchNextPage()
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, bottomRef])

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

import { QueryFunctionContext, useInfiniteQuery } from "react-query"
import { getInfiniteStations } from "../api/stations"
import { RefObject, useEffect } from "react"

export interface Station {
  id: number
  station_name: string
  station_address: string
  coordinate_x: string
  coordinate_y: string
}

const useStations = (bottomRef: RefObject<HTMLDivElement | null>) => {
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

  return {data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, status}
}

export default useStations
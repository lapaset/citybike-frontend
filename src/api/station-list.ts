export const getStations = async (
  previousMaxId?: number
) => {
  const previousMax = previousMaxId ? `?previousMax=${previousMaxId}` : ""
  const response: Response = await fetch(
    `http://localhost:3001/api/station${previousMax}`
  )
  const data = await response.json()
  return data
}

export const getInfiniteStations = async (previousMaxId: number) => {
  const data = await getStations(previousMaxId)
  const nextMax = data[data.length - 1]?.id
  return { data, nextMax }
}
export const getStationInfo = async (id?: string) => {
  if (id === undefined || isNaN(parseInt(id))) {
    throw new Error("Invalid id")
  }
  const response: Response = await fetch(
    `http://localhost:3001/api/station/${id}`
  )

  if (response.status === 404) {
    throw new Error("404 Data not found")
    return
  }
  const data = await response.json()
  return data
}

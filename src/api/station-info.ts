export const getStationInfo = async (id?: string) => {
  if (id === undefined || isNaN(parseInt(id))) {
    return null
  }
  const response: Response = await fetch(
    `http://localhost:3001/api/station/${id}`
  )
  const data = await response.json()
  return data
}

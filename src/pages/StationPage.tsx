import { useParams } from "react-router-dom"
import { getStationInfo } from "../api/station-info"
import { useQuery } from "react-query"

const StationPage = () => {
  const { id } = useParams()

  const response = useQuery(["stats", id], () => getStationInfo(id))
  const stationData = response.status === "success" && response.data

  if (response.status === "loading") {
    return <p>Loading...</p>
  }

  if (!stationData) {
    return null
  }

  const { station_name, station_address, start_count, end_count, avg_distance, avg_duration } = stationData

  return (
    <section>
      <h2>{station_name}</h2>
      <p>{station_address}</p>
      <h3>Journeys</h3>
      <p>Starting here</p>
      <p><strong>{start_count}</strong></p>
      <p>Ending here</p>
      <p><strong>{end_count}</strong></p>
      <h3>Journeys starting from this station</h3>
      <p>Average distance</p>
      <p><strong>{(avg_distance / 1000).toFixed(2)} km</strong></p>
      <p>Average duration</p>
      <p><strong>{(avg_duration / 60).toFixed()} minutes {(avg_duration % 60).toFixed()} seconds</strong></p>
    </section>
  )
}

export default StationPage

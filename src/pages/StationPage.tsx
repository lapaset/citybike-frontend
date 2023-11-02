import { useParams } from "react-router-dom"
import { getStationInfo } from "../api/station-info"
import { useQuery } from "react-query"
import styled from "styled-components"
import Card from "../components/Card"
import Statistic from "../components/Statistic"
import Map from "../components/Map"
import { LatLngExpression } from "leaflet"

const StationPage = () => {
  const { id } = useParams()

  const response = useQuery(["stats", id], () => getStationInfo(id))
  const stationData = response.status === "success" && response.data

  if (response.status !== "loading" && !stationData) {
    return null
  }

  const {
    station_name,
    station_address,
    start_count,
    end_count,
    avg_distance,
    avg_duration,
    coordinate_x,
    coordinate_y,
  } = stationData

  const averageDistance = `${(avg_distance / 1000).toFixed(2)} km`
  const averageDuration = `${(avg_duration / 60).toFixed()} min ${(
    avg_duration % 60
  ).toFixed()} sec`
  const position: LatLngExpression | undefined =
    coordinate_x !== undefined && coordinate_y !== undefined
      ? [coordinate_y, coordinate_x]
      : undefined

  return (
    <Container>
      {response.status === "loading" && <p>Loading...</p>}
      {response.status === "success" && (
        <>
          <FlexColumn>
          <Header>{station_name}</Header>
          <Address>{station_address}</Address>
          {position && <Map position={position} />}
          </FlexColumn>
          <FlexColumn>
            <Card title="Journeys total">
              <Statistic title="from" value={start_count} />
              <Statistic title="to" value={end_count} />
            </Card>
            <Card title="Journeys from this station">
              <Statistic title="average distance" value={averageDistance} />
              <Statistic title="average duration" value={averageDuration} />
            </Card>
          </FlexColumn>
        </>
      )}
    </Container>
  )
}

export default StationPage

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 16px;
`

const FlexColumn = styled.div`
  margin: 0;
`

const Header = styled.h2`
  margin-bottom: 8px;
`

const Address = styled.p`
  margin-top: 0;
`

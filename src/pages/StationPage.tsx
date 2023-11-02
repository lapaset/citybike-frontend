import { useParams } from "react-router-dom"
import { getStationInfo } from "../api/station-info"
import { useQuery } from "react-query"
import styled from "styled-components"

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
  } = stationData

  return (
    <Container>
      {response.status === "loading" && <p>Loading...</p>}
      {response.status === "success" && (
        <>
          <FlexColumn>
            <h2>{station_name}</h2>
            <p>{station_address}</p>
          </FlexColumn>
          <FlexColumn>
            <Card>
              <h3>Journeys total</h3>
              <Stat>
              <h4>from</h4>
              <p>
                <strong>{start_count}</strong>
              </p>
              </Stat>
              <Stat>
              <h4>to</h4>
              <p>
                <strong>{end_count}</strong>
              </p>
              </Stat>
            </Card>
            <Card>
              <h3>Journeys from this station</h3>
              <Stat><h4>average distance</h4>
              <p>
                <strong>{(avg_distance / 1000).toFixed(2)} km</strong>
              </p>
              </Stat>
              <Stat>
              <h4>average duration</h4>
              <p>
                <strong>
                  {(avg_duration / 60).toFixed()} min{" "}
                  {(avg_duration % 60).toFixed()} sec
                </strong>
              </p>
              </Stat>
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

const Card = styled.section`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid aliceblue;
  border-radius: 8px;
  overflow: hidden;
  margin: 24px;
  text-align: center;

  h3 {
    background: aliceblue;
    margin: 0;
    padding: 16px 24px;
  }
`

const Stat = styled.div`
  margin: 16px;
  p, h4 {
    margin: 0;
    font-weight: 400;
  }
  strong {
    font-size: 1.5em;
    font-weight: 700;
  }
`


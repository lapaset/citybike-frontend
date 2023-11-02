import "leaflet/dist/leaflet.css"
import { MapContainer } from "react-leaflet/MapContainer"
import { TileLayer } from "react-leaflet/TileLayer"
import { Marker } from "react-leaflet/Marker"
import { LatLngExpression } from "leaflet"
import { FC } from "react"
import { styled } from "styled-components"

type MapProps = {
  position: LatLngExpression
}

const Map: FC<MapProps> = ({ position }) => (
  <Container>
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      style={{ width: "400px", height: "300px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapContainer>
  </Container>
)

export default Map

const Container = styled(MapContainer)`
  width: 400px;
  height: 300px;
  margin: 36px 0;
`

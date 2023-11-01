import { FC } from "react"
import { Station } from "../hooks/useStationList"

type StationListProps = {
  stations: Station[]
}

const StationList: FC<StationListProps> = ({ stations }) => (
  <ul>
    {stations &&
      stations.map(({ id, station_name }: Station) => (
        <li key={id}>
          {id} {station_name}
        </li>
      ))}
  </ul>
)

export default StationList

import { FC } from "react"
import { Station } from "../hooks/useStationList"
import { styled } from "styled-components"

type StationListProps = {
  stations: Station[]
}

const StationList: FC<StationListProps> = ({ stations }) => (
  <List>
    {stations &&
      stations.map(({ id, station_name }: Station) => (
        <a href={`/station/${id}`} key={id}>
          <ListItem >
            {id} – {station_name}
          </ListItem>
        </a>
      ))}
  </List>
)

export default StationList

const List = styled.ul`
  list-style: none;
  text-align: left;
  padding: 4px;
  margin: 0;
`

const ListItem = styled.li`
  padding: 8px 16px;
  border-radius: 6px;

  &:hover {
    background: lavender;
    cursor: pointer;
  }
`

import { useRef } from "react"
import useStationList, { Station } from "./hooks/useStationList"
import StationList from "./components/StationList"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const App = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const { data, isFetchingNextPage, status } = useStationList(bottomRef)
  const pages = status === "success" && data?.pages
  const stations: Station[] = pages
    ? pages.reduce((all, page) => all.concat(page.data), [])
    : []

  return (
    <Grid>
      <Header>
        <a href="/">
          <h1>Helsinki City Bike Statistics</h1>
        </a>
      </Header>
      <Nav>
        <StationList stations={stations} />
        <div ref={bottomRef}>{isFetchingNextPage && "loading"}</div>
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </Grid>
  )
}

export default App

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(min-content, 300px) auto;
  grid-template-rows: 40px 1fr;
  grid-template-areas:
    "head head"
    "nav main";
`

const containerStyles = `
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: white;
`

const Header = styled.header`
  ${containerStyles}
  grid-area: head;
  text-align: left;
  display: flex;
  align-items: center;
  padding-left: 24px;

  h1 {
    font-size: 1.2em;
    color: black;
  }
`

const Nav = styled.nav`
  ${containerStyles}
  grid-area: nav;
  border-radius: 8px;
  margin: 24px 8px 24px 16px;
`

const Main = styled.main`
  ${containerStyles}
  grid-area: main;
  margin: 24px 16px;
  border-radius: 8px;
  min-height: 50%;
`

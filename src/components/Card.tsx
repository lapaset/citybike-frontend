import { FC, ReactElement } from "react"
import { styled } from "styled-components"

type CardProps = {
  title: string
  children: ReactElement[]
}

const Card: FC<CardProps> = ({ title, children }) => (
  <Container>
    <h3>{title}</h3>
    {children.map(child => child)}
  </Container>
)

export default Card

const Container = styled.section`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 1px solid lavender;
  border-radius: 8px;
  overflow: hidden;
  margin: 24px;
  text-align: center;

  h3 {
    background: lavender;
    margin: 0;
    padding: 16px 24px;
  }
`

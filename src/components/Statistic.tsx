import { FC } from "react"
import { styled } from "styled-components"

type StatisticProps = {
  title: string
  value: string
}

const Statistic: FC<StatisticProps> = ({ title, value }) => (
  <Container>
    <h4>{title}</h4>
    <p>
      <strong>{value}</strong>
    </p>
  </Container>
)

export default Statistic

const Container = styled.div`
  margin: 16px;

  p,
  h4 {
    margin: 0;
    font-weight: 400;
  }

  strong {
    font-size: 1.5em;
    font-weight: 700;
  }
`

import { styled } from "styled-components"

const WelcomePage = () => (
  <Container>
    <TextContainer>
      <h2>
        <span>Welcome</span>
        <br />
        <span>to the world of city bike journeys</span>
      </h2>
        <p>Select a station to begin</p>
    </TextContainer>
  </Container>
)

export default WelcomePage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;

  h2 {
    font-size: 2em;
    margin-bottom: 56px;

    span:nth-child(1) {
      font-size: 2.5em;
      line-height: 1.2;
      color: slateblue;
      margin-bottom: 0;
    }

    span:nth-child(3) {
      color: black;
    }
  }
`

const TextContainer = styled.div`
  text-align: left;
`

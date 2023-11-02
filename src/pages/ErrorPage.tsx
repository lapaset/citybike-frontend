import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { styled } from "styled-components";

const ErrorPage = () => {
  const error = useRouteError();

  const errorText = isRouteErrorResponse(error) ? error.statusText : error instanceof Error ? error.message : ''

  return <Container>
    <h1>Oops!</h1>
    <p>Sorry, an error has occured</p>
    <p><em>{errorText}</em></p>
    <a href='/'>Back to the frontpage</a>
  </Container>
}

export default ErrorPage

const Container = styled.main`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: white;
  border-radius: 8px;
  margin: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    margin: 36px;
  }

  p {
    margin: 0;
  }
`
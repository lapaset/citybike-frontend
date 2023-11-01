import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const errorText = isRouteErrorResponse(error) ? error.statusText : error instanceof Error ? error.message : ''

  return <main>
    <h1>Oops!</h1>
    <p>Sorry, an error has occured</p>
    <p><em>{errorText}</em></p>
    <a href='/'>Back to the frontpage</a>
  </main>
}

export default ErrorPage
import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import App from "./App.tsx"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage.tsx"
import StationPage, { loader } from "./pages/StationPage.tsx"
import WelcomePage from "./pages/WelcomePage.tsx"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
})

const paths = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage/>
      },
      {
        path: "station/:id",
        element: <StationPage />,
        loader: loader
      },
    ],
  },
]

const router = createBrowserRouter(paths)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
)

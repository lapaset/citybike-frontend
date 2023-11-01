import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import App from "./App.tsx"
import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
)

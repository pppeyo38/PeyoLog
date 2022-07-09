import { BrowserRouter } from "react-router-dom"
import { Reset } from "styled-reset"
import { Router } from "./router/Router"

export const App = () => {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}
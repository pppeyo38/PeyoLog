import { memo } from "react"
import { Routes, Route } from "react-router-dom"

import { Top } from "../components/pages/Top"
import { Test } from "../components/test"

export const Router = memo(() => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Top />}
      />
      <Route
        path="/test"
        element={<Test />}
      />
    </Routes>
  )
})
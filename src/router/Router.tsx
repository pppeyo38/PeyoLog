import { memo } from "react"
import { Routes, Route } from "react-router-dom"

import { Test } from "../components/test"

export const Router = memo(() => {
  return (
    <Routes>
      <Route
        path="/test"
        element={<Test />}
      />
    </Routes>
  )
})
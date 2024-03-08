import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "./App"

test("Se renderiza en Main", () => {
  render(<App />)
  expect(true).toBeTruthy()
})
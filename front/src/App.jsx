import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Week, Header, Day } from "./components"

function App() {

  return (
    <>
    <div className="h-full min-h-[50%] min-w-[50%]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/week" element={<Week />} />
          <Route path="/day" element={<Day />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

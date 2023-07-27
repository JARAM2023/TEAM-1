import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Week, Header, Day } from "./components"

function App() {

  return (
    <>
    <div className="App h-full min-h-[50%]">
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

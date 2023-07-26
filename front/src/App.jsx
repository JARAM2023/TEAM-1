import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Week, Header } from "./components"

function App() {

  return (
    <>
    <div className="App h-full min-h-[50%]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Week />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

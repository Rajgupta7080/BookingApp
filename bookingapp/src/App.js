import './App.css'
import Homepage from './pages/home/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './pages/list/List'
import Hotel from './pages/hotels/Hotel'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

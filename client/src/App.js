import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/location/:id' element={<LocationPage />} />
      </Routes>
    </div>
  )
}

export default App

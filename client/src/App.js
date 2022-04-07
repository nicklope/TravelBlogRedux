import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage'
import NewComment from './pages/NewComment'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/location/:id' element={<LocationPage />} />
        <Route path='newcomment/:id' element={<NewComment />} />
      </Routes>
    </div>
  )
}

export default App

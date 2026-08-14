import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from "./Users"
import CreateUsers from './CreateUsers'
import UpdateUsers from './UpdateUsers'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<CreateUsers />} />
        <Route path="/update/:id" element={<UpdateUsers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
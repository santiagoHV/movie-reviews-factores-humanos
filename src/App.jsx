import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/Navbar'
import Home from './pages/home/home'
import Movie from './pages/movie/movie'
import Profile from './pages/profile/profile'
import Login from './pages/login/login'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/movie" element={<Movie/>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App

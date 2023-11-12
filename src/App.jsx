import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/Navbar'
import AlertComponent from './components/AlertComponent/AlertComponent'
import Home from './pages/home/home'
import Movie from './pages/movie/movie'
import Profile from './pages/profile/profile'
import Login from './pages/login/login'
import Register from './pages/login/register'
import Logout from './pages/login/logout'
import Admin from './pages/admin/admin'
import TermsAndConditions from './pages/policies/TermsAndConditions'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <AlertComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/policies' element={<TermsAndConditions />} />
      </Routes>
    </>
  )
}

export default App

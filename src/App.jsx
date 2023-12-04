import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/Navbar'
import NewMovie from './components/NewMovie/NewMovie'
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
import AproveMovie from './pages/admin/aproveMovie'
import SearchResults from './pages/home/searchResults'
import EditMovie from './pages/admin/editMovie'

function App() {

  return (
    <>
      <NavBar/>
      <AlertComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/newMovie' element={<NewMovie />} />
        <Route path='/register' element={<Register />} />
        <Route path='/policies' element={<TermsAndConditions />} />
        <Route path='/admin/movie/:id' element={<AproveMovie />} />
        <Route path='/admin/edit/movie/:id' element={<EditMovie />} />
        <Route path='/search' element={ <SearchResults /> } />
      </Routes>
    </>
  )
}

export default App

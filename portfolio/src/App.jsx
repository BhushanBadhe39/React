
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './components/NotFound'
import Projects from './pages/Projects'
import Personal from './pages/Personal'
import Group from './pages/Group'
import User from './components/User'
import UserProfile from './pages/UserProfile'

function App() {

  return (
    <>
    <BrowserRouter>                                                                                   {/*Routing */}
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/projects' element = {<Projects/>}>
          <Route path='/projects/personal' element = {<Personal/>}/>                                 {/* Nested Routing */}
          <Route path='/projects/group' element = {<Group/>}/>
        </Route>
        <Route path='/user/:name/' element = {<User/>}/>
        <Route path='/userProfile/:id/' element = {<UserProfile/>}/>

        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

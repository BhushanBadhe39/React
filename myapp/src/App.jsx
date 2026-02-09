//Use Import to Link Css files-------------------------------------------------------------// 

import './App.css'
import tropicalFlowers from './assets/Tropical-flowers.jpg'
import linkedinIcon from './assets/linkedin-circle.png'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import MyInfo from './components/MyInfo'


//<> is  react fragment----> used to return multiple lines, cuz 
//You can function call as --> 'export default app' at end or while declaring as did below 

//To put another jsx file in it as well, create another jsx file and write it like this <Home/> 
//It will import itself as Well
//Use it Directly in React Fragment

export default function App() {

  return (

    <>
    {/* <MyInfo name = 'Bhushan'/>
    <Contact/> */}
    <About/>
    <Home/>                     {/*This Home.jsx code will be displayed on the top of the rest of the code*/}
    </>
  )
}

// export default App

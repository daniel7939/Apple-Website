import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import './assets/css/styles.css'
import Firstsection from './components/First section/Firstsection.jsx'
import Secondsection from './components/Second section/Secondsection.jsx'
import Thirdsection from './components/Third section/Thirdsection.jsx'
import Fourthsection from './components/Fourth section/Fourthsection.jsx'
import Fifthsection from './components/Fifth section/Fifthsection.jsx'
import Sixthsection from './components/Sixth section/Sixthsection.jsx'
import Youtubevideo from './components/Youtube video/Youtubevideo.jsx'
import { Routes, Route } from 'react-router-dom'
import Sharelayout from './components/Sharelayout/Sharelayout.jsx'
import Home from './components/Home/Home.jsx'
function App() {

  return (
    <>
     {/* <Header/> */}
     <Routes>
    <Route path='/' element={<Sharelayout/>}>
    
    <Route path='/' element={<Home/>}/>
    <Route path='mac' element={<Firstsection/>}/>
    <Route path='ipad' element={<Secondsection/>}/>
      <Route path='iphone' element={<Thirdsection/>}/>
      <Route path='watch' element={<Fourthsection/>}/>
      <Route path='tv' element={<Fifthsection/>}/>
      <Route path='music' element={<Sixthsection/>}/>
      {/* <Route path='support' element={<Youtubevideo/>}/> */}
</Route>

    <Route path='*' element={<h1>404 this page not found</h1>}/>
    
  
  
     </Routes>
     {/* <Firstsection/>
     <Secondsection/>
     <Thirdsection/>
     <Fourthsection/>
     <Fifthsection/>
     <Sixthsection/>
     <Youtubevideo/> */}
    {/* <Footer/> */}
    </>
  )
}

export default App

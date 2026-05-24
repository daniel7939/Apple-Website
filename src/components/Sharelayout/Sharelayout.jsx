
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Sharelayout() {
  return (
<>  
<Header/>

  <Outlet/>
  <Footer/>

</>  )
}

export default Sharelayout
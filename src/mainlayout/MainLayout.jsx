import React,{useRef,useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import {Outlet} from 'react-router-dom'
import { context } from '../utils/context'
import Modal from '../utils/Modal'
import '../utils/utils.css'
const MainLayout = () => {
  const [modal,setModal]=useState(false)
  const [details,setDetails]=useState({})
  const modalHandler=(value)=>{
   
      setDetails(value)
 
setModal(true)
document.getElementsByTagName("body")[0].classList.toggle("aaa")
  }
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null),useRef(null)];
  return (
    
    <div id='relative'>
            <context.Provider value={{
sectionRefs,
modalHandler,
modal,
setModal,
details,
setDetails,
  }}>
  {modal?(<Modal />):null}
       <div className="bg-lightGreen1">
            <Navbar/>
       </div>
        <div>
            <Outlet>
                {/* <Slider/>
                <Services/>
              <AboutUs/> */}
            </Outlet>
        </div>
       
              </context.Provider>
    </div>
  )
}

export default MainLayout
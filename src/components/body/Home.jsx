import React,{useEffect,useState,useRef,useContext} from 'react'
import { context } from '../../utils/context'
import Slider from './Slider'
import Services from './Services'
import AboutUs from './AboutUs'
import Products from './Products'
import Staff from './Staff'
import Modal from '../../utils/Modal'
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import Cooperation from './Cooperation'
import FAQ from './FAQ'
import Footer from './Footer'
import {motion,AnimatePresence} from 'framer-motion'

const Home = () => {
  const {sectionRefs}=useContext(context)

  // const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const [showNavbar,setShowNavbar]=useState(false)
    useEffect(()=>{
        const fixedNavbar=()=>{
        
            if(window.scrollY>80){
        
                setShowNavbar(true)
                
                }
                else{
                    setShowNavbar(false)
                }
        
        }
                document.addEventListener("scroll",fixedNavbar)
            },[])
        
  return (
    <div
    // initial={{opacity:0,y:-100}}
    // animate={{opacity:1,y:0}}
    // transition={{duration:2}}
    >
     
      <section className="" ref={sectionRefs[0]}>
       <Slider/>
      </section>
         <section className="  " ref={sectionRefs[1]}>
     <Products/>
      </section>
 <section className="" ref={sectionRefs[2]}>
<Services/>
      </section>

      <section className=" " ref={sectionRefs[3]}>
<Staff/>   
  </section>
     <section  ref={sectionRefs[4]}>
<FAQ/>   
  </section>
    <section  ref={sectionRefs[5]}>
<AboutUs/>   
  </section>
          <section  ref={sectionRefs[6]}>
<Footer/>
      </section> 
     
  
        {showNavbar ? (
            <div className='w-10 h-10 bg-lightGreen3 fixed bottom-5 right-5 dark:bg-dark rounded z-50'>
                    <a href="#Slider" className='block w-full h-full '>
                      <TbArrowBigUpLinesFilled  className='w-full h-full text-lightGreen1 text-dark dark:bg-[#0766AD]'/>
</a>
            </div>
        ):null}
    </div>
  )
}

export default Home
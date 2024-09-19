import React from 'react'
// import logo from '../../assets/images/banner/banner1.jpg';
import { GiAutoRepair,GiTeacher  } from "react-icons/gi";
import { FaCashRegister } from "react-icons/fa6";
import { MdOutlineInstallDesktop } from "react-icons/md";
import {motion} from 'framer-motion'
// import { GiTeacher } from "react-icons/gi";

const Services = () => {
  return (
    <motion.div id='Services' className='bg-lightGreen1  py-16 overflow-hidden' initial={{opacity:0,y:100}}transition={{duration:1}}  whileInView={{opacity:1,y:0}} viewport={{amount:.2,once:true}}>
       <section  className=' md:w-1/3 mx-auto '>
        <h2 className='py-2 font-bold text-center text-3xl text-text-dark ' style={{fontFamily:"tanha"}}>خدمات</h2>
        <h2 className='py-2 w-full font-bold text-center text-1xl text-dark' style={{fontFamily:"tanha"}}>   بخشی از خدمات ارائه شده توسط شرکت .... </h2>
      </section>
      <div className='grid md:grid-cols-2 gap-5 px-4 '>
        <motion.section initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} viewport={{amount:.5,once:true}} transition={{duration:.5,}} className='bg-lightGreen3 flex justify-center md:justify-between p-1 rounded  dark:bg-[#0766AD]'>
          <div className='flex-[.8] p-2 bg-lightGreen1 dark:bg-dark dark:text-lightGreen1'>
            <h2 className='title text-xl'>تعمیر  تجهیزات</h2>
            <p className='text-justify text-sm leading-7	' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</p>
          </div>
          <div className='flex-[.2] bg-lightGreen1   p-2 flex justify-center items-center dark:bg-dark'>
            <GiAutoRepair  className='text-7xl text-[#0766AD] dark:text-lightGreen1'/>
          </div>
        </motion.section>
        <motion.section initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} viewport={{amount:.5,once:true}} transition={{duration:.5,}} className='bg-lightGreen3 flex justify-center md:justify-between p-1 rounded  dark:bg-[#0766AD]'>
          <div className='flex-[.8] p-2 bg-lightGreen1 dark:bg-dark dark:text-lightGreen1'>
            <h2 className='title text-xl'>  نصب نرم افزار های فروشگاهی</h2>
            <p className='text-justify text-sm leading-7	' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</p>
          </div>
          <div className='flex-[.2] bg-lightGreen1   p-2 flex justify-center items-center dark:bg-dark'>
            <MdOutlineInstallDesktop  className='text-7xl text-[#0766AD] dark:text-lightGreen1'/>
          </div>
        </motion.section>
        <motion.section initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} viewport={{amount:.5,once:true}} transition={{duration:.5,}} className='bg-lightGreen3 flex justify-center md:justify-between p-1 rounded  dark:bg-[#0766AD]'>
          <div className='flex-[.8] p-2 bg-lightGreen1 dark:bg-dark dark:text-lightGreen1'>
            <h2 className='title text-xl'>  فروش سخت افزار و نرم افزار</h2>
            <p className='text-justify text-sm leading-7	' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</p>
          </div>
          <div className='flex-[.2] bg-lightGreen1   p-2 flex justify-center items-center dark:bg-dark'>
            <FaCashRegister  className='text-7xl text-[#0766AD] dark:text-lightGreen1'/>
          </div>
        </motion.section>
        <motion.section initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} viewport={{amount:.5,once:true}} transition={{duration:.5,}} className='bg-lightGreen3 flex justify-center md:justify-between p-1 rounded  dark:bg-[#0766AD]'>
          <div className='flex-[.8] p-2 bg-lightGreen1 dark:bg-dark dark:text-lightGreen1'>
            <h2 className='title text-xl'>  آموزش</h2>
            <p className='text-justify text-sm leading-7	' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</p>
          </div>
          <div className='flex-[.2] bg-lightGreen1   p-2 flex justify-center items-center dark:bg-dark'>
            <GiTeacher  className='text-7xl text-[#0766AD] dark:text-lightGreen1'/>
          </div>
        </motion.section>
   
    
 
   
      </div>

    </motion.div>
  )
}

export default Services
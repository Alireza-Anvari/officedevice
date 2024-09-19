import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './body.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import logo from '../../assets/images/logo/logo-website4.jpg'

import banner1 from "../../assets/images/products/products9.png";
import banner2 from "../../assets/images/products/products4.png";
import banner3 from "../../assets/images/products/products6.png";
import banner4 from "../../assets/images/products/products10.png";
import banner5 from "../../assets/images/products/products8.png";
import banner6 from "../../assets/images/banner/banner1.png";

import {motion} from 'framer-motion'
const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <motion.div
        initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{duration:2}}
      id="Slider"
      className="w-full h-[22rem]   md:h-screen  bg-lightGreen1   pt-16"
    >
 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
 

 <SwiperSlide> 
<div className=' w-full relative bg-lightGreen1 h-[22rem] gap-y-1 md:h-screen flex flex-col-reverse md:gap-y-0 md:flex-row '>

      <div className='title  flex flex-[.4]  justify-start items-center gap-y-1 md:flex-[.6] md:justify-center md:items-center flex-col md:gap-y-7'>
      <h1 className='text-xl md:text-5xl font-bold'>   شرکت بازرگانی  مارکت پیشرو</h1>
      <h2 className='text-base md:text-3xl'>فروش انواع صندوق های فروشگاهی ایرانی و خارجی </h2>

      </div>


      <div className='flex-[.6]  md:flex-[.4] flex  justify-center items-end md:justify-center md:items-center '>
                  <div className='coverImage w-44 h-44 md:w-80 md:h-80 rounded-full flex  justify-center items-center dark:bg-[#0766AD]  overflow-hidden'>

      <img src={logo}  className=" w-52 h-52 rounded-full" style={{width:"95%",height:"95%"}} />    
      </div>
      </div>
</div>
</SwiperSlide> 

 <SwiperSlide> 
 <div className='bg-lightGreen1 h-[22rem] w-full flex-col relative md:h-screen flex md:flex-row '>


 <div className='flex-[.6]  flex items-center justify-center gap-x-8 md:flex-[.4]  md:flex-col  md:justify-center md:items-center md:gap-5'>

 <div className='coverImage w-20 h-20 mt-[25%] md:w-28 md:h-28 bg-lightGreen3 md:ml-[25%] md:mt-[0] flex justify-center items-center dark:bg-[#0766AD]'>
 <img src={banner3} alt=""  className='w-18 h-18 md:w-24 md:h-24 '/>
 </div>
 <div className='coverImage w-20 h-20 mt-[0] md:w-28 md:h-28 bg-lightGreen3 md:mr-[25%]  flex justify-center items-center dark:bg-[#0766AD]'>
 <img src={banner3} alt=""  className='md:w-24 md:h-24  w-18 h-18'/>
 </div>
<div className='coverImage w-20 h-20 mt-[25%] md:w-28 md:h-28 bg-lightGreen3 md:ml-[25%] md:mt-[0] flex justify-center items-center dark:bg-[#0766AD]'>
 <img src={banner3} alt=""  className='w-18 h-18 md:w-24 md:h-24 '/>
 </div>

 </div> <div className='title flex-[.4] justify-start items-center gap-y-2 md:flex-[.6]  flex md:justify-center md:items-center flex-col md:gap-y-7'>
 <h1 className='text-xl  md:text-5xl font-bold'> تجهیزات فروشگاهی</h1>
 <h2 className=' text-base md:text-3xl'>فروش انواع تجهیزات های فروشگاهی ایرانی و خارجی </h2>

 </div>
          </div> 
</SwiperSlide> 

<SwiperSlide> 
<div className=' w-full relative bg-lightGreen1 h-[22rem] gap-y-1 md:h-screen flex flex-col-reverse md:gap-y-0 md:flex-row-reverse '>

      <div className='title  flex flex-[.4]  justify-start items-center gap-y-1 md:flex-[.6] md:justify-center md:items-center flex-col md:gap-y-7'>
      <h1 className='text-xl md:text-5xl font-bold'> صندوق فروشگاهی</h1>
      <h2 className='text-base md:text-3xl'>فروش انواع صندوق های فروشگاهی ایرانی و خارجی </h2>

      </div>


      <div className='flex-[.6]  md:flex-[.4] flex  justify-center items-end md:justify-center md:items-center'>
                  <div className='coverImage w-44 h-44 md:w-80 md:h-80 rounded-full flex  justify-center items-center bg-lightGreen3 dark:bg-[#0766AD] '>

      <img src={banner1}  className=" !w-3/4 !h-3/4" />    
      </div>
      </div>
</div>
</SwiperSlide> 


<SwiperSlide> 
<div className=' w-full relative bg-lightGreen1 h-[22rem] gap-y-1 md:h-screen flex flex-col-reverse md:gap-y-0 md:flex-row '>

      <div className='title  flex flex-[.4]  justify-start items-center gap-y-1 md:flex-[.6] md:justify-center md:items-center flex-col md:gap-y-7'>
      <h1 className='text-xl md:text-5xl font-bold'> نصب نرم افزار </h1>
      <h2 className='text-base md:text-3xl'>نصب انواع نرم افزار های فروشگاهی  </h2>

      </div>


      <div className='flex-[.6]  md:flex-[.4] flex  justify-center items-end md:justify-center md:items-center'>
                  <div className='coverImage w-44 h-44 md:w-80 md:h-80 rounded-full flex  justify-center items-center  dark:bg-[#0766AD] '>

      <img src={banner6}  className="!w-32 !h-32  md:!w-60 md:!h-60 object-contain" />    
      </div>
      </div>
</div>
</SwiperSlide> 
{/*
<SwiperSlide> 
 <div className=' w-full relative h-[22rem] gap-y-1 md:h-screen flex flex-col-reverse md:gap-y-0 md:flex-row bg-lightGreen1'>

       <div className='title flex-[.4] gap-y-1 md:flex-[.6] flex md:justify-center md:items-center flex-col md:gap-y-7'>
       <h1 className='text-2xl md:text-5xl font-bold'> صندوق فروشگاهی</h1>
       <h2 className='text-xl md:text-3xl'>فروش انواع صندوق های فروشگاهی ایرانی و خارجی </h2>

       </div>


       <div className='flex-[.6] md:flex-[.4] flex  justify-center items-center'>
                   <div className='coverImage w-48 h-48 md:w-80 md:h-80 rounded-full flex  justify-center items-center bg-lightGreen3 dark:bg-[#0766AD] '>

       <img src={banner1}  className=" w-3/4" />    
       </div>
       </div>
 </div>
 </SwiperSlide>




 <SwiperSlide> 
 <div className=' w-full relative h-[22rem] gap-y-1 md:h-screen flex flex-col-reverse md:gap-y-0 md:flex-row bg-lightGreen1'>

       <div className='title flex-[.4] gap-y-1 md:flex-[.6] flex md:justify-center md:items-center flex-col md:gap-y-7'>
       <h1 className='text-2xl md:text-5xl font-bold'> صندوق فروشگاهی</h1>
       <h2 className='text-xl md:text-3xl'>فروش انواع صندوق های فروشگاهی ایرانی و خارجی </h2>

       </div>


       <div className='flex-[.6] md:flex-[.4] flex  justify-center items-center'>
                   <div className='coverImage w-48 h-48 md:w-80 md:h-80 rounded-full flex  justify-center items-center bg-lightGreen3 dark:bg-[#0766AD] '>

       <img src={banner1}  className=" w-3/4" />    
       </div>
       </div>
 </div>
 </SwiperSlide> */}

{/* 
      <SwiperSlide> 
          <div className=' w-full relative h-[22rem] gap-y-1 md:h-screen flex flex-col-reverse md:gap-y-0 md:flex-row bg-lightGreen1'>
          
                <div className='title flex-[.4] gap-y-1 md:flex-[.6] flex md:justify-center md:items-center flex-col md:gap-y-7'>
                <h1 className='text-2xl md:text-5xl font-bold'> صندوق فروشگاهی</h1>
                <h2 className='text-xl md:text-3xl'>فروش انواع صندوق های فروشگاهی ایرانی و خارجی </h2>

                </div>


                <div className='flex-[.6] md:flex-[.4] flex  justify-center items-center'>
                            <div className='coverImage w-48 h-48 md:w-80 md:h-80 rounded-full flex  justify-center items-center bg-lightGreen3 dark:bg-[#0766AD] '>

                <img src={banner1}  className=" w-3/4" />    
                </div>
                </div>
          </div>
         </SwiperSlide> */}

{/* <SwiperSlide> 
          <div className=' w-full relative h-[22rem] gap-y-1 md:h-screen flex flex-col-reverse md:gap-y-0 md:flex-row bg-lightGreen1'>
          
                <div className='title flex-[.4] gap-y-1 md:flex-[.6] flex md:justify-center md:items-center flex-col md:gap-y-7'>
                <h1 className='text-2xl md:text-5xl font-bold'> صندوق فروشگاهی</h1>
                <h2 className='text-xl md:text-3xl'>فروش انواع صندوق های فروشگاهی ایرانی و خارجی </h2>

                </div>


                <div className='flex-[.6] md:flex-[.4] flex  justify-center items-center'>
                            <div className='coverImage w-48 h-48 md:w-80 md:h-80 rounded-full flex  justify-center items-center bg-lightGreen3 dark:bg-[#0766AD] '>

                <img src={banner1}  className=" w-3/4" />    
                </div>
                </div>
          </div>
         </SwiperSlide> */}
         
{/* <SwiperSlide> 
          <div className=' w-full relative h-[22rem] gap-y-1 md:h-screen flex flex-col-reverse md:gap-y-0 md:flex-row bg-lightGreen1'>
          
                <div className='title flex-[.4] gap-y-1 md:flex-[.6] flex md:justify-center md:items-center flex-col md:gap-y-7'>
                <h1 className='text-2xl md:text-5xl font-bold'> نصب و راه اندازی</h1>
                <h2 className='text-xl md:text-3xl'>نصب و راه اندازی تجهیزات سخت افزاری و نرم افزاری فروشگاهی </h2>

                </div>


                <div className='flex-[.6] md:flex-[.4] flex  justify-center items-center'>
                            <div className='coverImage w-48 h-48 md:w-80 md:h-80 rounded-full flex  justify-center items-center bg-lightGreen3 dark:bg-[#0766AD] '>

                <img src={banner6}  className=" w-3/4" />    
                </div>
                </div>
          </div>
         </SwiperSlide> */}

<div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </motion.div>
  );
};

export default Slider;

import React,{useContext} from "react";
import { context } from "../../utils/context";
import {motion} from 'framer-motion'
const User=({user})=>{
const {modalHandler}=useContext(context)
  return (
    <section className="card flex justify-center items-center   p-2 dark:border-[#0766AD] dark:bg-dark border-4 border-solid border-lightGreen3 box-border">
          <div className="   relative flex flex-col justify-between items-center w-full h-full box-border">
            <div className=" bg-blue-500 w-full h-[70%] ">
              <img
                className="w-full  h-full"
                src={user.image}
                alt=""
              />
            </div>
            <div className=  "bodyCard bg-lightGreen3 w-3/4 h-[30%] relative bottom-10 p-1 flex flex-col justify-center  dark:bg-lightGreen1 box-border">
              <h2 className="text-sm lg:text-base text-center ">{user.userName}</h2>
              <h3 className="text-sm lg:text-sm text-center ">{user.postUser}</h3>
              <button className="text-sm text-center w-3/4 mx-auto block bg-lightGreen1 dark:bg-dark dark:text-lightGreen1 sm:p-0 lg:p-1 cursor-pointer" onClick={()=>{modalHandler(user)}}>مشاهده رزومه</button>
            </div>
          </div>
        </section>
  )
}
const Staff = () => {
  const users=[
    {id:1,userName:"علیرضا",postUser:"مدیر",CV:["-"],image:"https://cdn6.f-cdn.com/files/download/38546484/28140e.jpg",phone:"09125696784"},
    {id:2,userName:"ایمان",postUser:"معاون",CV:["-"],image:"https://toppng.com/uploads/preview/person-png-11553989513mzkt4ocbrv.png",phone:"09125696784"},
    {id:3,userName:"محمد",postUser:"کارمند",CV:["-"],image:"https://toppng.com/uploads/preview/ersonal-trainer-wearing-customised-logo-t-shirt-personal-trainer-t-shirts-uk-115631839852iwaybngnj.png",phone:"09125696784"},
]
  return (
    <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} viewport={{amount:.2,once:true}} transition={{duration:1}} id="Staff" className="  py-16  box-border ">
      <div className=" md:w-1/3 mx-auto ">
      <section  className=' w-full mx-auto '>
        <h2 className='py-2 font-bold text-center text-3xl text-text-dark ' style={{fontFamily:"tanha"}}>تیم فنی</h2>
        <h2 className='py-2 w-full font-bold text-center text-1xl text-dark ' style={{fontFamily:"tanha"}}>   اعضای فنی شرکت ...... </h2>
      </section>
        {/* <h2 className='py-2 w-full font-bold text-center text-1xl text-dark' style={{fontFamily:"tanha"}}>   بخشی از خدمات ارائه شده توسط شرکت .... </h2> */}
      </div>
      <div className="grid grid-cols-[minmax(280px,450px)] grid-rows-[18rem] justify-center p-4 gap-4 md:grid-cols-3 md:grid-rows-[16rem] md:gap-8 md:p-8 lg:grid-cols-3 lg:grid-rows-[18rem] lg:gap-16 lg:px-16">
 {users.map(user=>(
  <User user={user}/>
 ))}
      </div>
    </motion.div>
  );
};

export default Staff;

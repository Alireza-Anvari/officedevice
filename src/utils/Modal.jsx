import React, { useContext,useRef } from "react";
import { context } from "./context";
import "./utils.css";
import { RiCloseCircleFill } from "react-icons/ri";

const Modal = () => {
  let content=undefined;
  const modalRef=useRef()
  const { details, modal,setModal } = useContext(context);
  const closeModalHandler=()=>{
    setModal(false)
    document.getElementsByTagName("body")[0].classList.toggle("aaa")
  }
  if (details.userName)
    { 
      console.log("username");
       content=  ( <div
      className={
        `fixed  left-0  z-[100] bg-lightGreen1 opacity-95   h-screen w-full  grid grid-cols-[7rem_14rem] auto-rows-[2rem_25rem_2rem_...]  justify-center content-center	 
        md:grid-cols-[10rem_20rem] md:auto-rows-[2rem_25rem_2rem_...] gap-1 md:justify-center md:content-center	 ` +
        (modal ? "modal" : "")
      }
    >
      <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1  col-span-2 py-1"><h2 className="text-center text-lg font-bold">مشخصات تیم فنی</h2></div>
        <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 col-span-2 flex justify-center items-center p-1"> <img src={details.image} className="w-64 h-64 object-cover rounded-full bg-lightGreen1 dark:bg-[#0766AD] " alt="" /></div>
         <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> نام همکار</span></div>
        <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.userName}</span></div>
       
         <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> سمت </span></div>
        <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.postUser}</span></div>
       
         <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> سوابق </span></div>
        <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> 
        {details.CV.map(c=>(
          <span>{c}{","}</span>
        ))}
        {/* {console.log("details",details.CV)} */}
        </div>
       
        
       
        <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> تلفن </span></div>
        <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.phone}</span></div>
       
      
         {/* <div className="bg-lightGreen3 dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>   قیمت </span></div>
        <div className="bg-lightGreen3 dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.price}</span></div>
    */}
             
    <div className="bg-lightGreen3 rounded col-span-2 p-1 dark:bg-[#0766AD] "> <button onClick={closeModalHandler} className="w-full block bg-lightGreen1">بستن</button></div>
   </div>)
  }
  else if (details.productName)
  { 
  
    content= (<div 
    className={
      `fixed  left-0  top-0 z-[100] bg-lightGreen1 opacity-95  h-screen w-full  grid   grid-cols-[7rem_14rem] auto-rows-[2rem_25rem_2rem_...] gap-1 justify-center content-center
        md:grid-cols-[10rem_20rem] md:auto-rows-[2rem_25rem_2rem_...]  md:justify-center md:content-center		 ` +
      (modal ? "modal" : "")
    }
  >
        <div className=" rounded col-span-2 p-1  "> <button onClick={closeModalHandler} className="mx-auto block bg-lightGreen1 " ><RiCloseCircleFill className="w-8 h-8 text-lightGreen3    dark:text-dark"/></button></div>

   {/* <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1  col-span-2 py-1"><h2 className="text-center text-lg font-bold">مشخصات محصول</h2></div> */}
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 col-span-2 flex justify-center items-center p-1"> <img src={details.image} className="w-64 h-64 object-contain rounded-full bg-lightGreen1 dark:bg-[#0766AD] " alt="" /></div>
      <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>نام محصول</span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.productName}</span></div>
    
      <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> مدل </span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.model}</span></div>
    
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> {details.connection ? " قابلیت اتصال " : details.monitor ? "  صفحه نمایش" : "جنس"}</span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.connection ? details.connection :  details.monitor ? details.monitor : details.material}</span></div>
{details.material ? null :(
      
<>
<div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> {details.cut ? "برش دهنده اتوماتیک" : details.power ?  "منبع تغذیه" : "حافظه داخلی"}</span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.cut ? details.cut : details.power ? details.power : details.RAM}</span></div>
    
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> {details.port ? "  پورت " :"هارد"}</span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.port ? details.port : details.HARD}</span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> {details.speed ? "  سرعت چاپ" : details.scan ?"سرعت اسکن ":  "پردازنده  "}</span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.speed  ? details.speed : details.scan ? details.scan : details.processor} </span></div>
    
    </>
)}
      <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span> سایر مشخصات</span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.others}</span></div>
    
      <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>   سایز </span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1"> <span>{details.size}</span></div>
    
    
 
      <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>   قیمت </span></div>
     <div className="bg-lightGreen3 rounded dark:bg-dark  dark:text-lightGreen1 p-1 text-sm"> <span>{details.price}</span></div>


    
        
   </div>
    )
  }

  return (
<div className="">
  {content}
  </div>

  )
};

export default Modal;

import React from "react";
// import { GrInstagram } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import logo from '../../assets/images/logo/logo-website3.jpg'
import {motion} from 'framer-motion'

const AboutUs = () => {
  return (
    <motion.div initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} viewport={{amount:.5,once:true}} transition={{duration:1}} id="AboutUs" className="bg-lightGreen1  py-16 ">
      <section className=" md:w-1/3 mx-auto ">
        <h2
          className="py-2 font-bold text-center text-3xl text-text-dark "
          style={{ fontFamily: "tanha" }}
        >
          {" "}
          درباره ما{" "}
        </h2>
      </section>
      <div className="grid md:grid-cols-2  gap-4 px-4 md:gap-8 md:px-8 overflow-hidden">
      <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} viewport={{amount:.2,once:true}} transition={{duration:1}}  className=" dark:border-[#0766AD] dark:bg-dark border-4 border-solid border-lightGreen3 box-border p-1  ">
       
         <p className="text-justify py-2 px-5 leading-7 text-sm md:text-base md:leading-8 dark:text-lightGreen1">طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.</p>
          <ul className="w-full   grid grid-cols-2 gap-2 p-1">
            <li className="p-1 bg-lightGreen3 text-xl md:text-2xl text-dark dark:text-lightGreen1 dark:bg-[#0766AD]">
              <a  className="flex"><FaPhoneSquareAlt className=""/> <span className="text-sm md:text-base"> &nbsp;: 09123456789</span></a>
            </li>
         
            <li className="p-1 bg-lightGreen3 text-xl md:text-2xl text-dark dark:text-lightGreen1 dark:bg-[#0766AD]">
              <a  className="flex"><SiWhatsapp className=""/> <span className="text-sm md:text-base"> &nbsp;: 09123456789</span></a>
            </li>
            <li className="p-1 bg-lightGreen3 text-xl md:text-2xl text-dark dark:text-lightGreen1 dark:bg-[#0766AD]">
              <a  className="flex"><SiTelegram className=""/> <span className="text-sm md:text-base"> &nbsp;: 09123456789</span></a>
            </li>
            <li className="p-1 bg-lightGreen3 text-xl md:text-2xl text-dark dark:text-lightGreen1 dark:bg-[#0766AD]">
              <a  className="flex"><ImLocation2 className=""/> <span className=" text-sm md:text-base"> &nbsp;: کرج ، گوهردشت </span></a>
            </li>
        
    
        
          </ul>
        </motion.div>

        <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} viewport={{amount:.5,once:true}} transition={{duration:1}}  className="flex justify-center items-center dark:border-[#0766AD] dark:bg-dark border-4 border-solid border-lightGreen3 box-border p-1  ">
       <img className="w-64 h-64 py-16 md:py-0  rounded-full" src={logo} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;

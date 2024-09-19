import React from 'react'
import product1 from '../../assets/images/products/products1.png'
import Product from './Product'
// import Products from './Products';
import {motion} from 'framer-motion'
import image0 from "../../assets/images/products/products100.png";
import image1 from "../../assets/images/products/products101.jpg";
import image2 from "../../assets/images/products/products102.jpg";
import image3 from "../../assets/images/products/products103.jpg";
import image4 from "../../assets/images/products/products104.jpg";
import image5 from "../../assets/images/products/products105.jpg";
import image6 from "../../assets/images/products/products106.jpg";
import image7 from "../../assets/images/products/products107.jpg";
import image8 from "../../assets/images/products/products108.jpg";
import image9 from "../../assets/images/products/products109.jpg";
import image10 from "../../assets/images/products/products110.jpg";
import image11 from "../../assets/images/products/products111.jpg";
import image12 from "../../assets/images/products/products112.jpg";
import image13 from "../../assets/images/products/products113.jpg";
import image14 from "../../assets/images/products/products114.jpg";
import image15 from "../../assets/images/products/products115.jpg";
// import image5 from "../../assets/images/products/products8.png";
// import image6 from "../../assets/images/products/products7.png";
// import image7 from "../../assets/images/products/products2.png";
// import image8 from "../../assets/images/products/products1.png";
// import image9 from "../../assets/images/products/products3.png";
// import image10 from "../../assets/images/products/products11.jpg";
const Products = () => {

  const AllProducts=[
    {id:0,productName:" پرینتر حرارتی بیکسولون",model:"SRP-350III",price:"11,800,000 تومان ",image:image0,speed:"250",weight:"۱۵۰۰ گرم",connection:"درگاه اتصال به کشوی پول",cut:"برش دهنده اتوماتیک دارد",port:"سریال / موازی ",others:"دارای ۶۴ Mb SDRAM",size:"۱۴۵x۲۰۴x۱۴۶ میلی‌لیتر",garanty:"1 سال"},
    {id:1,productName:" پرینتر حرارتی بیکسولون",model:"SRP-F312",price:"20,000,000 تومان ",image:image1,speed:"270",weight:"۲۱۴۷  گرم",connection:"درگاه اتصال به کشوی پول",cut:"برش دهنده اتوماتیک دارد",port:"سریال / موازی ",others:"دارای ۶۴ Mb SDRAM",size:"۱۵۰ × ۱۸۶ × ۱۵۰ میلی‌لیتر",garanty:"1 سال"},
    {id:2,productName:" پرینتر حرارتی اسکار",model:"POS88A",price:"7,600,000 تومان ",image:image2,speed:"۲۲۰",weight:"۱۳۰۰   گرم",connection:"درگاه اتصال به کشوی پول",cut:"برش دهنده اتوماتیک دارد",port:"سریال / موازی ",others:"سنسور اتمام کاغذ/USB",size:"۱۲۳×۱۵۰×۱۸۵ میلی‌لیتر",garanty:"1 سال"},
    {id:3,productName:" پرینتر حرارتی اسکار",model:"POS88F",price:"7,700,000 تومان ",image:image3,speed:"۲۵۰",weight:"۱۲۵۰    گرم",connection:"درگاه اتصال به کشوی پول",cut:"برش دهنده اتوماتیک دارد",port:"سریال / موازی ",others:"سنسور اتمام کاغذ/USB",size:"۱۵۰ × ۱۳۹ × ۲۰۰ میلی‌لیتر",garanty:"1 سال"},
    {id:4,productName:" پرینتر حرارتی اتم ",model:"Z90",price:"5,700,000 تومان ",image:image4,speed:"۲۵۰",weight:"۱۰۰۰     گرم",connection:"    - ",cut:"برش دهنده اتوماتیک دارد",port:"سریال ",others:"LAN/USB",size:"۱۸۵x۱۳۰x۱۳۰ میلی‌لیتر",garanty:"1 سال"},
    {id:5,productName:" پرینتر حرارتی اتم ",model:"ZX300",price:"6,400,000 تومان ",image:image5,speed:"۳۰۰ ",weight:"۱۱۳۰      گرم",connection:"    - ",cut:"برش دهنده اتوماتیک دارد",port:"سریال ",others:"LAN/USB / ۲۰۳ dpi/ سنسور اعلان صوتی",size:"۱۸۴x۱۴۱x۱۳۵ میلی‌لیتر",garanty:"1 سال"},
    {id:6,productName:" پرینتر حرارتی اتم ",model:"POS-8370",price:"4,300,000 تومان ",image:image6,speed:"۳۰۰ ",weight:"۹۵۰       گرم",connection:"  درگاه اتصال به کشوی پول",cut:"برش دهنده اتوماتیک دارد",port:"سریال ",others:"LAN/USB /دارای چراغ LED آبی-قرمز/ Maximum ۲۰۳dpi dpi",size:"۱۱x۱۶x۱۳میلی‌لیتر",garanty:"1 سال"},
    {id:7,productName:" پرینتر حرارتی چیتا  ",model:"P80A ",price:"4,750,000 تومان ",image:image7,speed:"۳۰۰ ",weight:"۱۴۰۰        گرم",connection:"  درگاه اتصال به کشوی پول",cut:"برش دهنده اتوماتیک دارد",port:"سریال ",others:"LAN/USB /   Maximum ۲۰۳dpi dpi",size:"۱۳.۵x۱۸x۱۲میلی‌لیتر",garanty:"1 سال"},
    {id:8,productName:" بارکدخوان دیتالاجیک   ",model:" QuickScan Lite QW2100 ",price:"3,350,000 تومان ",image:image8,scan:"  ۴۰۰ اسکن در ثانیه ",weight:"۱۱۹         گرم",connection:"Serial RS۲۳۲",power:"   5V DV   ",port:"سریال ",others:"بارکدهای تک بعدی/ دارای نشانگر رنگ قرمز هنگام خواندن بارکد به طور صحیح",size:"۱۷۰x۶۵x۷۰ میلی‌لیتر",garanty:"2 سال"},
    {id:9,productName:" بارکدخوان فستر  ",model:" QuickScan   ",price:"2,000,000 تومان ",image:image9,scan:"  380 اسکن در ثانیه ",weight:"۱۲۲          گرم",connection:"با سیم و بی سیم ",power:"   USB    ",port:"سریال ",others:"مناسب بارکد های سوپر مارکت - بوتیک و لباس فروشی ها - عطاری و فروشگاه ها ",size:"۱۷۰x۴۰x۲۰ میلی‌لیتر",garanty:"2 سال"},
    {id:10,productName:"  بارکد خوان دو بعدی فستر  ",model:" QUICK-SCAN   ",price:"3,100,000 تومان ",image:image10,scan:"  ۴۰۰ اسکن در ثانیه ",weight:"۱۴۸           گرم",connection:"با سیم و بی سیم ",power:"   USB    ",port:"سریال ",others:"  تکنولوژی  یک بعدی و دو بعدی / دوربین Canon Camera" ,size:"۶۰ × ۸۰ × ۱۵۰ میلی‌لیتر",garanty:"2 سال"},
    {id:11,productName:"  بارکد خوان دو بعدی میوا ",model:" MBS5680-2D   ",price:"2,780,000 تومان ",image:image11,scan:"  350 اسکن در ثانیه ",weight:"۱۱۸           گرم",connection:"با سیم  / PAN ",power:"   USB    ",port:"- ",others:"  ۸۰۰ × ۴۸۰ پیکسل   دو بعدی / دوربین  " ,size:"- ",garanty:"2 سال"},
    {id:12,productName:" صندوق فروشگاهی تکنما",model:"A100",price:"28,000,000 تومان ",image:image12,processor:"(core ۴) Intel Celeron J۱۹۰۰ ۲Ghz",weight:"۸۵۰۰       گرم",monitor:" TFT LCD ۱۵.۶ اینچ",RAM:"   8 گیگ ",HARD:"128 گیگ SSD  ",others:"صفحه نمایش لمسی / سیستم عامل ویندوز 10 / نمایشگر دوم / رزولوشن ۷۶۸x۱۳۶۶" ,size:" - ",garanty:"1 سال"},
    {id:13,productName:"صندوق فروشگاهی لمسی اتم",model:"Racal i5",price:"30,360,000 تومان ",image:image13,processor:"intel core i۵",weight:"۳۴۲۰        گرم",monitor:" اندازه نمایشگر: ۱۵.۶ اینچ",RAM:"   4 گیگ ",HARD:"128 گیگ SSD  ",others:"چهار عدد USB - جک ۳.۵ میلی‌متری - VGA - LAN - دکمه پاور زیر مانیتور - دارای کابل برق" ,size:" ۴۶۰x۴۲۰x۱۸۵ ",garanty:"1 سال"},
    {id:14,productName:"ریموت بلوتوثی درب پارکینگ",model:" AZ-433",price:"94,600 تومان ",image:image14,material:"  استیل",weight:"۰.۰۳ کیلوگرم",others:"جهت بازشدن سمت راست" ,size:"۰.۰۸*۰.۰۴*.۰.۱ متر",garanty:"1 سال"},
    {id:15,productName:"ریموت در پارکینگ",model:" V655",price:"101,000 تومان ",image:image15,material:" پلاستیک/ استیل",weight:"۰.۱ کیلوگرم",others:" / کپی خور از ریموت های دیگر فرکانس : ۴۳۳ مگاهرتز تعداد کانال : ۴ کانال ولت : ۱۲ برد ریموت : ۸۰ متر آنتن : ندارد ضد آب : نیست / جهت بازشدن  دو جهت "  ,size:"۰.۰۱۵x۰.۰۳x۰.۰۵ متر",garanty:"1 سال"},

    // {id:1,productName:"محصول دوم",model:"mx-110",price:"35,000,000",image:image1,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:2,productName:"محصول سوم",model:"mx-110",price:"35,000,000",image:image3,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:3,productName:"محصول چهارم",model:"mx-110",price:"35,000,000",image:image4,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:4,productName:"محصول پنجم",model:"mx-110",price:"35,000,000",image:image5,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:5,productName:"محصول ششم",model:"mx-110",price:"35,000,000",image:image6,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:6,productName:"محصول هفتم",model:"mx-110",price:"35,000,000",image:image7,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:7,productName:"محصول هشتم",model:"mx-110",price:"35,000,000",image:image8,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:8,productName:"محصول نهم",model:"mx-110",price:"35,000,000",image:image9,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:9,productName:"محصول دهم",model:"mx-110",price:"35,000,000",image:image1,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:10,productName:"محصولیازدهم",model:"mx-110",price:"35,000,000",image:image6,company:"irani",date:"2020/23/15",garanty:"1 سال"},
    // {id:11,productName:"محصول دوازدهم",model:"mx-110",price:"35,000,000",image:image2,company:"irani",date:"2020/23/15",garanty:"1 سال"},
  ]
  return (
    <div  id='Products' className='bg-lightGreen1   py-16'>
      <motion.section  initial={{opacity:0,y:100}} viewport={{amount:.2,once:true}} whileInView={{opacity:1,y:0}} transition={{duration:1}} className=' md:w-1/3 mx-auto '>
        <h2 className='py-2 font-bold text-center text-3xl text-text-dark ' style={{fontFamily:"tanha"}}>محصولات</h2>
        <h2 className='py-2 w-full font-bold text-center text-1xl text-dark' style={{fontFamily:"tanha"}}>   بخشی از محصولات ارائه شده توسط شرکت .... </h2>
      </motion.section>
      <section  className=' grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 lg:grid-cols-4 px-4 '>
        {AllProducts.map(product=>(

            <Product product={product}/>

        ))}


      </section>
  
    </div>
  )
}

export default Products
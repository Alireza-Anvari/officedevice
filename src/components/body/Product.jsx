import React,{useContext} from 'react'
import { context } from '../../utils/context'
import {motion} from 'framer-motion'
const Product = ({product}) => {
  const {modalHandler}=useContext(context)
  return (
     
    <motion.div className='card  relative flex flex-col p-1' initial={{opacity:0,y:100}} viewport={{amount:.2,once:true}} whileInView={{opacity:1,y:0}} transition={{duration:1}}>
    <div className=''></div>
    <div><img src={product.image} alt="" /></div>
    <div className='pt-14  font-bold text-center text-[#0766AD] dark:text-lightGreen1 dark:!bg-dark' >
      <h2 className='text-lg mt-2 p-0'> {product.productName}</h2>
      <h2 className=' text-sm my-2 p-0'>{product.model} </h2>
      <h2 className=' text-sm my-2 p-0'>{product.price} </h2>
      <button onClick={()=>{modalHandler(product)}} className='my-2 bg-[#0766AD] w-1/2 py-1 rounded text-lightGreen1'>جزییات</button>
    </div>
  </motion.div>

    )
}

export default Product
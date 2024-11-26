import React from 'react'
import Image from 'next/image'
const Contact = () => {
  return (
    <div className='min-h-[calc(100vh-200px)] w-full flex flex-col md:flex-row bg-zinc-50 md:px-10 md:py-5'>

    <div className='relative h-[80vh] w-1/2 bg-white'>
      <Image src="/contact1.png" fill alt='contactPic'/>

    </div>
    <div className='w-1/2 h-[80vh] bg-white flex flex-col ' > 
       <h1 className='text-6xl text-orange-400 mt-3 mr-10 text-center'>Contact with us</h1>
      <form className='flex flex-col m-10 justify-center h-full space-y-10 flex-wrap' action="">
        <input className='p-[20px]  rounded-xl outline-none bg-orange-200  ' type="text" placeholder="Name and Surname" id="" />
        <input className='p-[20px] rounded-xl outline-none bg-orange-200 ' type="text" placeholder="Email Adress" id="" />
        <input className='p-[20px] rounded-xl outline-none bg-orange-200 ' type="text" placeholder="Phone Number" id="" />
        
        <textarea className='p-[20px] rounded-xl outline-none bg-orange-200 ' placeholder='Your Message' rows="10" cols="10" name="" id=""></textarea>
        <div className='w-full flex items-center justify-center'>  <button className="w-full bg-orange-400 px-4 py-4 text-white rounded-lg text-sm md:text-lg cursor-pointer">Send</button></div>
       






      </form>

    </div>











    </div>
  )
}

export default Contact
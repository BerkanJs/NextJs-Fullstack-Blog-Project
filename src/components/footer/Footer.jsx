import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-stone-50 mt-2 px-10 pb-3 flex items-center justify-between'>


      {/*Logo*/}

      <div className="text-2xl flex flex-col items-start justify-center font-bold">
        MIS
        <span className="text-orange-300 font-medium font-sans">Community</span>
      </div>

      {/*right side text */}
      <p className='text-lg text-orange-300'>
        all rights are reserved | 2024 | Berkan Özçelik.


      </p>

      







    </div>
  )
}

export default Footer
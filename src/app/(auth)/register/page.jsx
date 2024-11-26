

import RegisterForm from '@/components/registerForm/registerForm'
import { register } from '@/lib/action'
import React from 'react'

const RegisterPage =() => {
  return (
    <div className='min-h-[calc(100vh-200px)] w-full flex flex-col flex-wrap  bg-zinc-50 md:px-10 md:py-5 items-center justify-center gap-y-10'>
      <h1 className='text-5xl text-orange-500 font-bold'>Register</h1>
      <RegisterForm/>

      





    </div>
  )
}

export default RegisterPage
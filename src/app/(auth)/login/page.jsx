
import React from 'react'
import { handleGithubLogin} from '@/lib/action'
import LoginForm from '@/components/loginForm/loginForm'



const LoginPage = async () => {

  




 
  return (
    <div className='min-h-[calc(100vh-200px)] w-full flex flex-col items-center justify-center md:flex-row bg-zinc-50 md:px-10 md:py-5 '>

      <div className='w-1/2 h-[80vh]  bg-white flex flex-col items-center justify-center  '>      
        <form  action={handleGithubLogin} className='flex flex-col items-center justify-center ' >
        <button className='px-10 py-4 bg-slate-400 text-white text-xl font-bold rounded-lg cursor-pointer'>Login with Github</button>
        
      </form>
      <LoginForm/>
      

     
      </div>
   


     






    </div>
  )
}

export default LoginPage
"use client";

import { register } from "@/lib/action";

import { useActionState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
    const [state, formAction] = useActionState(register, undefined);

    const router = useRouter();
  
    useEffect(() => {
      state?.success && router.push("/login");
    }, [state?.success, router]);

    return(

        <form className='flex flex-col w-2/4 text-center gap-7' action={formAction}>
        <input className='p-5 bg-orange-200 text-white border-none rounded-lg' type="text" placeholder='username' name='username' />
        <input className='p-5 bg-orange-200 text-stone-50 border-none rounded-lg'  type="text" placeholder='email' name='email' />
        <input className='p-5 bg-orange-200 text-stone-50 border-none rounded-lg' type="password" placeholder='password' name='password' />
        <input className='p-5 bg-orange-200 text-stone-50 border-none rounded-lg' type="password" placeholder='password again' name='passwordRepeat' />
        <button className='p-5 cursor-pointer bg-orange-400 text-white font-bold rounded-lg'>Register</button>
   
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>




      </form>









    );





};

export default RegisterForm;
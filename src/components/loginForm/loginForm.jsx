"use client";

import { login } from "@/lib/action";

import {useActionState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useActionState(login,undefined);

  return (
    <form className="flex flex-col  m-10  space-y-10 flex-wrap"  action={formAction}>
      <input className='p-[20px]  rounded-xl outline-none bg-orange-200  ' type="text" placeholder="username" name="username" />
      <input className='p-[20px]  rounded-xl outline-none bg-orange-200  ' type="password" placeholder="password" name="password" />
      <button  className="w-[200px] h-[50px] bg-orange-300 rounded-lg text-white font-bold">Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b className="text-orange-300">Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
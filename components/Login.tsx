"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center text-center">
      <Image src="/logo.svg" width={150} height={150} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="text-black font-bold text-3xl animate-pulse"
      >
        Sign In To Use FarazGPT
      </button>
    </div>
  );
}

export default Login;

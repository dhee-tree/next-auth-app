"use client";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
        <h1>Sign in</h1>
        <button onClick={() => signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT })}>
            Sign in with Google
        </button>
        <button onClick={() => signIn("github", { callbackUrl: DEFAULT_LOGIN_REDIRECT })}>
            Sign in with GitHub
        </button>
    </div>
  )
}

export default Login
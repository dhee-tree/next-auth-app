"use client";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Socials = () => {
    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-plain me-5" onClick={() => signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT })}>
                <FcGoogle size={24} /> Sign in with Google
            </button>
            
            <button className="btn btn-plain" onClick={() => signIn("github", { callbackUrl: DEFAULT_LOGIN_REDIRECT })}>
                <FaGithub size={24} /> Sign in with GitHub
            </button>
        </div>
    );
};

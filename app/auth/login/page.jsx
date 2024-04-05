"use client";
import { Socials } from "@/app/_components/auth/socials";

const Login = () => {
  return (
    <div className="card mt-5" style={{ width: "50%", margin: "0 auto" }}>
      <div className="card-body">
        <h1 className="card-title">Sign in</h1>
        <Socials />
      </div>
    </div>
  );
}

export default Login
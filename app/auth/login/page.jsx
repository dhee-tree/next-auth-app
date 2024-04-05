import { Socials } from "@/app/_components/auth/socials";

const Login = () => {
  return (
    <div className="mt-5 card justify-content-center text-center" style={{ width: "50%", margin: "0 auto" }}>
      <div className="card-body justify-content-center">
        <h1 className="card-title">Sign in</h1>
        <Socials />
      </div>
    </div>
  );
}

export default Login
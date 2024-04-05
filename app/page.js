import Link from "next/link"
import { auth } from "@/auth"

const Home = async () => {
  const session = await auth()

  return (
    <div>
      <h1 className="pt-5">Next Auth</h1>
      <p>Authentication for Next.js with Auth.js</p>
      
      {session ? (
        <div>
          <p>You are an authenticated user.</p> 
        </div>
      ) : (
        <button className="btn btn-primary">
          <Link href="/auth/login">Sign in</Link>
        </button>
      )}
    </div>
  )

}

export default Home
import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1 className="pt-5">Next Auth</h1>
      <p>Authentication for Next.js with Auth.js</p>
      
      <button className="btn btn-primary">
        <Link href="/auth/login">Sign in</Link>
      </button>
    </div>
  )

}

export default Home
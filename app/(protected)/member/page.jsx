import { auth } from "@/auth"

const member = async () => {
  const session = await auth()
  
  return (
    <div>
      <h1>Member Server Session</h1>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
    </div>
  )
}

  

export default member
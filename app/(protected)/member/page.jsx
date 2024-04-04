import { auth } from "@/auth"

const member = async () => {

  const session = await auth()

  return (
    <div>
      <h1>Member Server Session</h1>
      {JSON.stringify(session)}
    </div>
  )
}

export default member
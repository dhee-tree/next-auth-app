import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from 'next/navigation';

const Member = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/Member');
  }

  return (
    <div>
      <h1>Member Server Session</h1>

      <h3 className="mt-2">Name: {session?.user?.name}</h3>
      <p>Email: {session?.token?.token?.user?.email}</p>
      <p>Role: {session?.token?.token?.user?.role}</p>
    </div>
  )
}

export default Member
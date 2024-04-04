import Link from "next/link"
import { auth, signOut } from "@/auth"


const Nav = async() => {
    const session = await auth()

    return (
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Next Auth App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link href="/create-user">Create User</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link href="/member">Member</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link href="/client-member">Client Member</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="nav-item me-2">
                                {session ? (
                                    <form action={async () => {
                                        "use server";

                                        await signOut({ callbackUrl: "/" });
                                    }}>
                                        <button type="submit" className="btn btn-danger">
                                            Sign Out
                                        </button>
                                    </form>
                                ) : (
                                    <Link href="/auth/login" className="btn btn-primary">Sign in</Link>
                                )}
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>

            </header>
    )
}

export default Nav
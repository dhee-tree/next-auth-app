import Link from "next/link"

const Nav = () => {
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
                            <Link href="/CreateUser">Create User</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link href="/Member">Member</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link href="/About">About</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </header>
  )
}

export default Nav
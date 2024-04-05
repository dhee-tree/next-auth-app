import Nav from "./_components/Nav";
import BootstrapClient from "./_components/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";


export const metadata = {
  title: "Next Auth App",
  description: "A simple Next.js app with Google and Email/Password authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
          <main>
            <div className="container">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col text-center">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </main>
      </body>
      <BootstrapClient />
    </html>
  );
}

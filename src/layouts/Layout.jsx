import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="smooth-scroll">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

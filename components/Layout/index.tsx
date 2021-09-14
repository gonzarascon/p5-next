import Footer from 'components/Footer'
import Header from 'components/Header'
import type { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-grow flex-col">
      <Header />
      <main className="container mx-auto mt-10">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

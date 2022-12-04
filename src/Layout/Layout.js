/** @format */

import Navigation from '../components/Navigation/Navigation'

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout

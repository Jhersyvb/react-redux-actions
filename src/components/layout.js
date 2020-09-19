import React from 'react'

const Layout = props => {
  const { children } = props

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">CRUD</span>
      </nav>

      <div className="container">
        <div className="d-flex justify-content-center p-3">
          <div className="col-md-6">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Layout

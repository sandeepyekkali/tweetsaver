import React from 'react'

function Navbar() {
    return (
        <div >
            <nav className="navbar fixed-top navbar-dark bg-primary" data-test='navbar'>
              <span className="container navbar-brand mb-0 h1">@ Tweet Saver</span>
            </nav>
        </div>
    )
}

export default Navbar

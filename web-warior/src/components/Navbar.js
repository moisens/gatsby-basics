import React from 'react'
import { Link } from 'gatsby';


export default function Navbar() {
  return (
    <nav>
      <h1>Web wariror</h1>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/projects">Portofolio projects </Link>
      </div>
    </nav>
  )
}

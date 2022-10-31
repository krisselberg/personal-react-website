import React from "react"

const Navbar = ({ title }) => {
  return (
    <nav className="nav">
      <ul className="nav-home">
        <li>
          <a aria-current="page" className="nav-home-text" href="/">
            <h1 className="main-heading">Kris Selberg</h1>
          </a>
        </li>
      </ul>
      <ul className="nav-links">
        <li className="nav-link-item">
          <a aria-current="page" className="nav-link-text" href="/about">
            About
          </a>
        </li>
        <li className="nav-link-item">
          <a aria-current="page" className="nav-link-text" href="/projects">
            Projects
          </a>
        </li>
        <li className="nav-link-item">
          <a aria-current="page" className="nav-link-text" href="/blog">
            Blog
          </a>
        </li>
        <li className="nav-link-item">
          <a aria-current="page" className="nav-link-text" href="/books">
            Books
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

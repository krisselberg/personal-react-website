import * as React from "react"
import Navbar from "./navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const googleAnalytics = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B1SX5MW45R');`

  let header = <Navbar title={title} />

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B1SX5MW45R"
      ></script>
      <script>{googleAnalytics}</script>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

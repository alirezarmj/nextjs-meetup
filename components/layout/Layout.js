import Head from "next/head"
import MainNavigation from "../navbar/main-navigation"


const Layout = (props) => {
  return (
    <div>
      <MainNavigation/>
        <main>
            {props.children}
        </main>
    </div>
  )
}

export default Layout
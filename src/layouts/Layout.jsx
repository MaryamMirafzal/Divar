import Footer from "./Footer"
import Header from "./Header"

import styles from "./Layouts.module.css"

function Layout({children}) {
  return (
    <div>
        <Header />
        <div className={styles.main}>{children}</div>
        <Footer />
    </div>
  )
}

export default Layout
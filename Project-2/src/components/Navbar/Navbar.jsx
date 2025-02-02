import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Abut</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar

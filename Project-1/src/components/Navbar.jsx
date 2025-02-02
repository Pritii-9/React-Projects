

const Navbar = () => {
  return (
       <nav className="container">
        <div className="logo">
          <img src="/assets/brand_logo.png" alt="brandLogo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button>Login</button>
      </nav>

  )
}

export default Navbar

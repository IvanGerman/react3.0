import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-nav">
      <NavLink to="/gamePage">GamePage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/statsPage">StatsPage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/">StartPage</NavLink>
    </nav>
  )
}

export default Navbar;
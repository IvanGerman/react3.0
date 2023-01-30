import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/gamePage">GamePage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/statsPage/*">StatsPage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/">StartPage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/formikPage">FormikPage</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/useHooksPage">UseHooksPage</NavLink>
    </nav>
  )
}

export default Navbar;
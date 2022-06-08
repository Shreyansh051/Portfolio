import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import useWindowDimensions from "../utils/dimensionHelper";
import styles from "../Css/navbar.module.css";
const navItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Skills",
    route: "/skills",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

const CustomNav = () => {
  const { width } = useWindowDimensions();
  const navbarBgColor = width < 768 ? "green" : "red";
  return (
    <div>
      <Navbar className={` ${styles.navbar}  `} fixed="top">
        <Link to="/">
          <img className={styles.logo} src="../images/s.gif" alt="logo" />
        </Link>

        <Navbar.Toggle
          className={`"border-0" `}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`bg-${navbarBgColor}`}
        >
          <Nav className="mx-auto">
            {navItems.map((item) => (
              <Nav.Link className={`text-center navLink`} key={item.label}>
                <NavLink
                  exact
                  className={`color-customBlue ml-5 w-200 text-decoration-none `}
                  activeClassName={`${styles.active} font-weight-bold  mb-5 `}
                  to={item.route}
                >
                  {item.label}
                </NavLink>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;

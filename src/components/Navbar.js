import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styles from "./navbar.module.css"; // Import the new CSS file

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.siteTitle}>
        Summit Street Fitness
      </Link>
      <ul>
        <CustomLink to="/InfoDump">Info Dump</CustomLink>
        <CustomLink to="/ActionAssist">Action Assist</CustomLink>
        <CustomLink to="/About">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? styles.active : ""}>
      <Link to={to} className={styles.btn} {...props}>
        {children}
      </Link>
    </li>
  );
}

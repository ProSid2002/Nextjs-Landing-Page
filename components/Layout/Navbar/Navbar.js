import Link from "next/link";
import navData from "../../../data/nav-data";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["nav-container"]}>
      <h1 className={styles["nav-title"]}>
        <Link href="/">
          <img src="/logo.svg" alt={navData.title} className={styles.logo} />
        </Link>
      </h1>
      <nav>
        <ul className={styles["nav-list"]}>
          {navData.content.map((item, index) => (
            <li key={index}>
              <Link href={navData.href[index]} scroll={true}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

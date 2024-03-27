import Link from "next/link";
import { usePathname } from "next/navigation";

// Style
import styles from "./navLink.module.css";

const NavLink = ({ link }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        pathname === link.url && styles.active
      }`}
      href={link.url}
      key={link.name}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;

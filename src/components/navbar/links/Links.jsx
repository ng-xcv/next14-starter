"use client";

import Image from "next/image";
import { useState } from "react";

// Components
import NavLink from "./navLink/navLink";

// Style
import styles from "./links.module.css";

const data = [
  {
    name: "HomePage",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "About",
    url: "/about",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {data.map((item) => (
          <NavLink key={item.name} link={item} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ name: "Admin", url: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink link={{ name: "Login", url: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {data.map((item) => (
            <NavLink link={item} key={item.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

import Link from 'next/link';
import { useState } from 'react';

import classNames from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';

import styles from '@styles/components/NavOffcanvas.module.css';

const NavOffcanvas = () => {
  const [isOpen, setOpen] = useState(false);

  const sectionClass = classNames({
    [styles.navSection]: true,
    [styles.active]: isOpen,
  });

  const navClass = classNames({
    [styles.nav]: true,
    [styles.active]: isOpen,
  });

  const overlayClass = classNames({
    [styles.navOverlay]: true,
    [styles.active]: isOpen,
  });

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <section className={sectionClass}>
      <div className={overlayClass} onClick={closeNav} />
      <nav className={navClass}>
        <div className={styles.navMain}>
          <ol className={styles.primaryNav}>
            <li className={styles.navItem}>
              <Link href={`/`}>
                <a>All Recipes</a>
              </Link>
            </li>
          </ol>
        </div>
      </nav>
      <div className={styles.navToggleWrapper}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          className={styles.navToggle}
          duration={0.2}
          color="var(--hamburger-color)"
        />
      </div>
    </section>
  );
};

export default NavOffcanvas;

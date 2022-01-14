import Link from 'next/link';
import classNames from 'classnames';
import siteInfo from '@data/siteInfo';
import Arrow from './svg/arrow.svg';
import styles from '@styles/components/Nav.module.css';

export const NavItem = ({ path, children }) => {
  return (
    <li className={styles.navItem}>
      <Link href={path} className={styles.navLink}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ol className={styles.navList}>
        <NavItem path="/">
          <Arrow className={styles.homeIcon} />
        </NavItem>
        {siteInfo.nav.map((item, index) => {
          return (
            <NavItem key={`${item.path}-${index}`} path={item.path}>
              {item.label}
            </NavItem>
          );
        })}
      </ol>
    </nav>
  );
};

export default Nav;

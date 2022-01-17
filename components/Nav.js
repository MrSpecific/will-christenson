import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import siteInfo from '@data/siteInfo';
import ArrowIcon from './svg/ArrowIcon';
// import Arrow from './svg/github.svg';
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

const HomeLink = () => {
  return (
    <NavItem path="/">
      <ArrowIcon className={styles.homeIcon} />
      <span className="visually-hidden">Home</span>
    </NavItem>
  );
};

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ol className={styles.navList}>
        {router.pathname !== '/' && <HomeLink />}
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

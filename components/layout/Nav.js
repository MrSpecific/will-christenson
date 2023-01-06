import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import siteInfo from '@lib/siteInfo';
import ArrowIcon from '../svg/ArrowIcon';
import styles from '@styles/components/Nav.module.css';

export const NavItem = ({ path, children, className }) => {
  return (
    <li className={classNames([styles.navItem, className])}>
      <Link href={path} className={styles.navLink}>
        {children}
      </Link>
    </li>
  );
};

const HomeLink = () => {
  return (
    <NavItem path="/" title="Back home">
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
          const itemClass = classNames({ [styles.current]: item.path === router.pathname });
          return (
            <NavItem key={`${item.path}-${index}`} path={item.path} className={itemClass}>
              {item.label}
            </NavItem>
          );
        })}
      </ol>
    </nav>
  );
};

export default Nav;

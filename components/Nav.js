import Link from 'next/link';
import classNames from 'classnames';
import siteInfo from '@data/siteInfo';
import styles from '@styles/components/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ol className={styles.navList}>
        {siteInfo.nav.map((item, index) => {
          return (
            <li key={`${item.path}-${index}`} className={styles.navItem}>
              <Link href={item.path} className={styles.navLink}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Nav;

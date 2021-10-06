import Link from 'next/link';
import classNames from 'classnames';

import Nav from '@components/Nav';
import styles from '@styles/Header.module.css';
import siteInfo from '@data/siteInfo';
import Razor from '../public/svg/razor.svg';

// import Razor from "@public/svg/razor.svg";

const Header = (props) => {
  const headerClass = classNames({
    gutter: true,
    [styles.header]: true,
    [styles.major]: true,
  });

  return (
    <header className={headerClass}>
      <Nav />
      <h1 className={styles.title}>
        <Link href={'/'}>
          <a>
            {props.title || siteInfo.title}
            <Razor className={styles.logo} />
          </a>
        </Link>
      </h1>
      {props.children}
    </header>
  );
};

export default Header;

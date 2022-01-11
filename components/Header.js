import Nav from '@components/Nav';
import styles from '@styles/components/Header.module.css';

const Header = ({ headline, byline, children }) => {
  return (
    <header className={styles.header}>
      <div className="content">
        {headline && <h1 className={styles.pageTitle}>{headline}</h1>}
        <div className={styles.headerRow}>
          {byline && <div className={styles.byline}>{byline}</div>}
          <Nav />
        </div>
        {children && <div className={styles.headerRow}>{children}</div>}
      </div>
    </header>
  );
};

export default Header;

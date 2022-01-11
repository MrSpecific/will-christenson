import Nav from '@components/Nav';
import styles from '@styles/components/Header.module.css';

const Header = ({ headline, byline, children }) => {
  return (
    <header className={styles.header}>
      <div className="content">
        {headline && <h1 className={styles.pageTitle}>{headline}</h1>}
        {byline && <div className={styles.byline}>{byline}</div>}
      </div>
      {children}
      {/* <Nav /> */}
    </header>
  );
};

export default Header;

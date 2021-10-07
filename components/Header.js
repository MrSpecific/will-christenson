import Nav from '@components/Nav';
import styles from '@styles/components/Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Nav />
      {props.children}
    </header>
  );
};

export default Header;

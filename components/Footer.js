import Image from 'next/image';

import styles from '@styles/components/Footer.module.css';
import GithubLogo from './svg/github.svg';
// import siteInfo from "@data/siteInfo";

import Link from 'next/link';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <a href="//github.com/MrSpecific" target="_blank" rel="noopener noreferrer">
        <GithubLogo />
        <span className="visually-hidden">Github</span>
      </a>
    </footer>
  );
};

export default Footer;

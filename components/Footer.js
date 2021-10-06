import Image from 'next/image';

import styles from '@styles/components/Footer.module.css';
// import siteInfo from "@data/siteInfo";

import Link from 'next/link';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <a href="//github.com/MrSpecific" target="_blank" rel="noopener noreferrer">
        <Image src="/github.svg" alt="Github Logo" width={72} height={16} />
        Github
      </a>
    </footer>
  );
};

export default Footer;

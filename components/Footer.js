import styles from '@styles/components/Footer.module.css';
import GithubLogo from './svg/github.svg';
import FlickrLogo from './svg/flickr.svg';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <a href="//github.com/MrSpecific" target="_blank" rel="noopener noreferrer">
        <GithubLogo />
        <span className="visually-hidden">Github</span>
      </a>
      <a href="//www.flickr.com/photos/bombcity/albums" target="_blank" rel="noopener noreferrer">
        <FlickrLogo />
        <span className="visually-hidden">Flickr</span>
      </a>
    </footer>
  );
};

export default Footer;

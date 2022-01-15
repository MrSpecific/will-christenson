import styles from '@styles/components/Footer.module.css';
import GithubLogo from './svg/github.svg';
import FlickrLogo from './svg/flickr.svg';
import InstagramLogo from './svg/instagram.svg';

const Footer = () => {
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
      <a href="//www.instagram.com/mr_specific/" target="_blank" rel="noopener noreferrer">
        <InstagramLogo />
        <span className="visually-hidden">Flickr</span>
      </a>
    </footer>
  );
};

export default Footer;

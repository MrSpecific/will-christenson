import styles from '@styles/components/Footer.module.css';
import GithubLogo from './svg/github.svg';
import FlickrLogo from './svg/flickr.svg';
import InstagramLogo from './svg/instagram.svg';

const SocialLink = ({ url, children, label }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
      {children}
      <span className="visually-hidden">{label}</span>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socials}>
        <SocialLink url="//github.com/MrSpecific" label="Github">
          <GithubLogo />
        </SocialLink>
        <SocialLink url="//www.instagram.com/mr_specific/" label="Instagram">
          <InstagramLogo />
        </SocialLink>
        <SocialLink url="//www.flickr.com/photos/bombcity/albums" label="Flickr">
          <FlickrLogo />
        </SocialLink>
      </ul>
    </footer>
  );
};

export default Footer;

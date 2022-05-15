import styles from '@styles/components/Footer.module.css';
// import GithubLogo from '../svg/github.svg';
// import FlickrLogo from '../svg/flickr.svg';
// import InstagramLogo from '../svg/instagram.svg';

const SocialIcon = ({ url, children, label }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
      {children}
      <span className="visually-hidden">{label}</span>
    </a>
  );
};
const SocialLink = ({ url, children, label }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
        {label}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section id="socials" className={styles.footerSocials}>
        <h2 className={styles.socialsHeading}>Find me on: </h2>
        <ul className={styles.socials}>
          <SocialLink url="//github.com/MrSpecific" label="Github" />
          <SocialLink url="//www.linkedin.com/in/willchristenson/" label="LinkedIn" />
          <SocialLink url="//www.polywork.com/mrspecific" label="Polywork" />
          <SocialLink url="//www.instagram.com/mr_specific/" label="Instagram" />
          <SocialLink url="//www.flickr.com/photos/bombcity/albums" label="Flickr" />
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

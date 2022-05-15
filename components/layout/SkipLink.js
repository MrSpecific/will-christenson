import styles from '@styles/components/SkipLink.module.css';

export default function SkipLink({ href = '#main', label = 'Skip to content' }) {
  return (
    <a id="skip-nav" className={styles.skipLink} href={href}>
      {label}
    </a>
  );
}

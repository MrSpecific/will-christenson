/* eslint-disable jsx-a11y/alt-text */
import { Image, StructuredText } from 'react-datocms';
import styles from '@styles/components/ProjectCard.module.css';

const ProjectCard = ({ title, featuredImage, date, tags }) => {
  return (
    <div className={styles.projectCard}>
      <h2>{title}</h2>
      <Image data={featuredImage.responsiveImage} className={styles.cardImage} />
    </div>
  );
};

export default ProjectCard;

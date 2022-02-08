/* eslint-disable jsx-a11y/alt-text */
import { Image, StructuredText } from 'react-datocms';
import styles from '@styles/components/ProjectCard.module.css';

const ProjectCard = ({ title, link, featuredImage, projectType, date, description, tags }) => {
  return (
    <section className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <Image data={featuredImage.responsiveImage} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h2>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        <div className="body-copy">
          <StructuredText data={description} />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;

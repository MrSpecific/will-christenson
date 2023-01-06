/* eslint-disable jsx-a11y/alt-text */
// import { Image, StructuredText } from 'react-datocms';
import styles from '@styles/components/ProjectCard.module.css';

const ProjectTags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;
  return (
    <ul className={styles.projectTagList}>
      {tags.map((tag) => (
        <li key={tag.slug} className={styles.projectTag}>
          {tag.title}
        </li>
      ))}
    </ul>
  );
};

const ProjectCard = ({ title, link, featuredImage, projectType, date, description, tags }) => {
  // const ProjectImage = <Image data={featuredImage.responsiveImage} className={styles.cardImage} />;
  return (
    <section className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        {/* {link ? <a href={link}>{ProjectImage}</a> : ProjectImage} */}
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
        <ProjectTags tags={tags} />
        <div className="body-copy">{/* <StructuredText data={description} /> */}</div>
      </div>
    </section>
  );
};

export default ProjectCard;

import fs from 'fs';
import matter from 'gray-matter';
import parseMarkdown from '@utils/parseMarkdown';

const contentDirectory = `${process.cwd()}/content`;

const loadContent = async (slug) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = `${contentDirectory}/${realSlug}.md`;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content: parseMarkdown(content) };
};

export default loadContent;

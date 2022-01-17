import fs from 'fs';
import matter from 'gray-matter';
import { unified } from 'unified';
import markdown from 'remark-parse';

const parseMarkdown = (content) => {
  const engine = unified().use(markdown);
  const ast = engine.parse(content);

  return engine.runSync(ast);
};

const contentDirectory = `${process.cwd()}/content`;

const loadContent = async (slug) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = `${contentDirectory}/${realSlug}.md`;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content: parseMarkdown(content) };
};

export default loadContent;

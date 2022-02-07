import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export const cleanNode = (node) => {
  if (node.value === undefined) delete node.value;
  if (node.tagName === undefined) delete node.tagName;
  // if (node.data) {
  //   delete node.data.hName;
  //   delete node.data.hChildren;
  //   delete node.data.hProperties;
  // }

  if (node.children) node.children.forEach(cleanNode);
  delete node.position;

  return node;
};

const parseMarkdown = (content) => {
  const engine = unified().use(remarkParse).use(remarkGfm).use(remarkBreaks);
  const ast = engine.parse(content);
  const processedAst = engine.runSync(ast);

  cleanNode(processedAst);

  return processedAst;
};

export default parseMarkdown;

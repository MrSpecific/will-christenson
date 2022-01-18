import { unified } from 'unified';
import markdown from 'remark-parse';

export const cleanNode = (node) => {
  if (node.value === undefined) delete node.value;
  if (node.tagName === undefined) delete node.tagName;
  if (node.data) {
    delete node.data.hName;
    delete node.data.hChildren;
    delete node.data.hProperties;
  }

  if (node.children) node.children.forEach(cleanNode);
  delete node.position;

  return node;
};

const parseMarkdown = (content) => {
  const engine = unified().use(markdown);
  const ast = engine.parse(content);
  const processedAst = engine.runSync(ast);

  cleanNode(processedAst);

  return processedAst;
};

export default parseMarkdown;

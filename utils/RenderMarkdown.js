/* eslint-disable react/display-name */
import React from 'react';

const getComponent = (node) => {
  switch (node.type) {
    case 'root':
      return ({ children }) => <>{children}</>;

    case 'paragraph':
      return ({ children }) => <p>{children}</p>;

    case 'strong':
      return ({ children }) => <span className="bold">{children}</span>;

    case 'emphasis':
      return ({ children }) => <em>{children}</em>;

    case 'heading':
      return ({ children, depth = 2 }) => {
        const Heading = `h${depth}`;
        return <Heading>{children}</Heading>;
      };

    case 'text':
      return ({ value }) => <>{value}</>;

    case 'link':
      return ({ url, children }) => <a href={url}>{children}</a>;

    /* Handle all types here … */

    default:
      console.log('Unhandled node type', node);
      return ({ children }) => <>{children}</>;
  }
};

const Node = (node) => {
  const Component = getComponent(node);
  const { children } = node;

  return children ? (
    <Component {...node}>
      {children.map((child, index) => (
        <Node key={index} {...child} />
      ))}
    </Component>
  ) : (
    <Component {...node} />
  );
};

const RenderMarkdown = ({ ast }) => <Node {...ast} />;

export default React.memo(RenderMarkdown);

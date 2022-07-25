import RenderMarkdown from '@utils/RenderMarkdown';

const Content = ({ content }) => {
  return <RenderMarkdown ast={content.content} />;
};

export default Content;

import Document, { Html, Head, Main, NextScript } from 'next/document';
import siteInfo from '@data/siteInfo';

const Body = ({ children }) => {
  return <body>{children}</body>;
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />

          <meta property="og:title" content={siteInfo.title} />
          <meta property="og:site_name" content={siteInfo.title} />
          <meta property="og:url" content={siteInfo.url} />
          <meta property="og:description" content={siteInfo.description} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={siteInfo.opengraphImage} />
          <meta property="twitter:image" content={siteInfo.opengraphImage} />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default MyDocument;

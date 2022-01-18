const GoogleAnalytics = ({ id }) => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}', {
        page_path: window.location.pathname,
      });
    `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;

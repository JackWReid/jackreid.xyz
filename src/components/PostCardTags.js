import React from 'react';

export default ({post: { title, subtitle, body }}) => (
  <div>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@jackreid" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={subtitle} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={subtitle} />
    <meta property="og:url" content={window.location} />
  </div>
);

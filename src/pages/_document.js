import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl-PL">
      <Head>
        {/* Meta dane strony */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Opis strony */}
        <meta name="description" content="Your site description goes here" />

        {/* Słowa kluczowe */}
        <meta name="keywords" content="your,keywords,go,here" />

        {/* Tytuł strony (globalny) */}
        <title>Woj-Płot | Usługi ślusarskie</title>

        {/* Meta dla social mediów (Open Graph) */}
        <meta property="og:title" content="Your Social Media Title" />
        <meta
          property="og:description"
          content="Description for social media"
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />

        {/* Meta dla Twittera */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Twitter Title" />
        <meta name="twitter:description" content="Twitter description here" />
        <meta name="twitter:image" content="/path-to-image.jpg" />

        {/* Ikona strony (favicon) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

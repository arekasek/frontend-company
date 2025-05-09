import RenderBlocks from "@/utils/RenderBlocks";
import Head from "next/head";
import { pagesData } from "@/data/pagesData";

const Page = ({ page }) => {
  if (!page) {
    return <div>Error: Page not found</div>;
  }

  return (
    <>
      <Head>
        <title>{page.metaTitle || "Woj-Płot | Usługi ślusarskie"}</title>
        <meta
          name="keywords"
          content="usługi ślusarskie, 
          bramy, ogrodzenia, balustrady, 
          kowalstwo, Lębork, Pomorze, lebork, 
          wojplot, Woj-Płot, woj-płot. usługi ślusarskie 
          lębork opinie, Lebork, 
          ogrodzenie lebork, brama lebork, balustrada lebork,
          ogrodzenie pomorze, brama pomorze, balustrada pomorze,
          ogrodzenie lebork, brama lebork, balustrada lebork,
          "
        />
        <meta
          name="google-site-verification"
          content="59_xWaApGEsHErFp3Q9rNY9QzzWBrTBLr-NKfWGSyIc"
        />
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:image" content={page.metaImage} />
        <meta property="og:url" content={page.url} />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="author" content="Woj-Płot" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href="https://wojplot.pl" />
        <meta name="apple-mobile-web-app-title" content="Woj-Płot" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="pl_PL" />
      </Head>

      <RenderBlocks layout={page.layout} />
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = Object.keys(pagesData).map((slug) => ({
    params: { slug: slug === "home" ? [] : [slug] },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params?.slug ? ctx.params.slug.join("/") : "home";
  const page = pagesData[slug];

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
};

export default Page;

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
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:image" content={page.metaImage} />
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

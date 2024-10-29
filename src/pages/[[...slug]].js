import RenderBlocks from "@/utils/RenderBlocks";
import React from "react";
import Head from "next/head";
import axios from "axios";

const Page = ({ page }) => {
  if (!page) {
    return <div>Error: Page not found</div>;
  }

  return (
    <>
      <Head>
        <title>{page.metaTitle || "Woj-Płot | Usługi ślusarskie"}</title>
        <meta
          name="description"
          content="Woj-Płot to profesjonalna firma ślusarska oferująca najwyższej jakości ogrodzenia, balustrady oraz konstrukcje metalowe. Nasze usługi wyróżniają się precyzją wykonania i dbałością o detale. Sprawdź naszą ofertę i zaufaj ekspertom od metalu!"
        />

        <meta
          property="og:title"
          content={
            page.metaTitle ||
            "Woj-Płot | Profesjonalne Usługi Ślusarskie – Ogrodzenia, Balustrady, Konstrukcje Metalowe"
          }
        />
        <meta
          property="og:description"
          content={
            page.metaDescription ||
            "Woj-Płot to Twoje zaufane źródło usług ślusarskich. Oferujemy szeroki zakres usług, w tym budowę ogrodzeń, balustrad oraz konstrukcji metalowych. Nasza firma wyróżnia się jakością, precyzją oraz dbałością o detale."
          }
        />

        <meta
          property="og:image"
          content={page.metaImage || "/default-image.jpg"}
        />
        <meta
          property="og:url"
          content={`https://twojastrona.com/${page.slug}`}
        />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={page.metaTitle || "Domyślny tytuł"}
        />
        <meta
          name="twitter:description"
          content={page.metaDescription || "Domyślny opis"}
        />
        <meta
          name="twitter:image"
          content={page.metaImage || "/default-image.jpg"}
        />
      </Head>

      <RenderBlocks layout={page.layout} />
    </>
  );
};

export const getStaticPaths = async () => {
  try {
    const pageReq = await axios.get(
      "http://localhost:4000/api/pages?limit=100"
    );
    const pageData = pageReq.data;

    return {
      paths: pageData.docs.map(({ slug }) => ({
        params: { slug: slug !== "index" ? slug.split("/") : [] },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching static paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params?.slug ? ctx.params.slug.join("/") : "index";

  try {
    const pageReq = await axios.get(
      `http://localhost:4000/api/pages?where[slug][equals]=${slug}`
    );
    const pageData = pageReq.data.docs[0];

    if (!pageData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        page: pageData,
      },
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      notFound: true,
    };
  }
};

export default Page;

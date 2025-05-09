import Header from "@/blocks/global/Header";
import Contact from "@/blocks/global/Contact";
import "@/styles/globals.css";
import axios from "axios";
import Footer from "@/blocks/global/Footer";
import Sidebar from "@/blocks/global/Sidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="flex h-auto scroll-smooth">
        <div className="flex-1 bg-gray-200 w-full">
          <Component {...pageProps} />
        </div>
      </div>

      <Contact />
      <Sidebar></Sidebar>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

import Head from "next/head";
import {Open_Sans} from "next/font/google";
import NavBar from '@/components/navbar';
import "@/styles/globals.css";

const open_Sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function App({ Component, pageProps }) {
  const { 
    metaTitle = "Nathan Schroter Portfolio", 
    metaDescription = "An online website displaying my work" 
  } = pageProps;

  return (
    <>
      <Head>
        <title>Nathan's Portfolio</title>
        <meta name="author" content="Nathan Schroter" />
        <meta property="title"  content={metaTitle} />
        <meta property="description"  content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </Head>
      <div className={`${open_Sans.className}`}>
        <NavBar/>
        <Component {...pageProps} />
        {/* <Footer/> */}
      </div>
    </>
  );
}
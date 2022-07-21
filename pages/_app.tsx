import "@styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Alexandre Houmeau</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
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
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Hi I'm Alexandre Houmeau a freelance full stack web developer looking for a job in Amsterdam. I working on a daily basis with ReactJs Node.js Next.js and very various Javascript tools and framework."/>
        <meta property="og:title" content="Alexandre Houmeau - full stack web developer"/>
        <meta property="og:description" content="Hi I'm Alexandre Houmeau a freelance full stack web developer looking for a job in Amsterdam. I working on a daily basis with ReactJs Node.js Next.js and very various Javascript tools and framework."/>
        <meta property="og:url" content="https://alexandre-houmeau.com/"/>
        <meta property="og:type" content="website"/>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;

import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Esperanza</title>
        <link rel="shortcut icon" href="/img/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/img/favicons/apple-touch-icon.png"
        />
        <meta
          name="description"
          content="Promovemos projetos populares que fornecem educação pública de
          qualidade para populações carentes."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        <meta property="og:title" content="Esperanza" />
        <meta
          property="og:description"
          content="Promovemos projetos populares que fornecem educação pública de
          qualidade para populações carentes."
        ></meta>
        <meta property="og:image" content="/img/favicons/favicon.ico"></meta>
      </Head>
      <GlobalStyles />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;

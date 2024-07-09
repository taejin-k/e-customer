import '@29cm/ui-reset';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../demo.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>감도 깊은 취향 셀렉트샵 29CM</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

import Head from 'next/head';
import Router from 'next/router';
import withGA from 'next-ga';
import PageTransitionContainer from '../components/app/PageTransitionContainer';
import '../styles/index.css';
import {GlobalStyles} from 'twin.macro';

function App({Component, pageProps, router}) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300;1,400&family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png"/>
      </Head>
      <GlobalStyles/>
      <PageTransitionContainer>
        <Component {...pageProps} key={router.route}/>
      </PageTransitionContainer>
    </>
  );
}

export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(App);
import Head from 'next/head';
import DefaultLayout from '../layouts/DefaultLayout';
import { TWITTER_URL } from '../config/constants';

function AboutPage() {
  return (
    <DefaultLayout>
      <Head>
        <title>About Me | Markolo</title>
        <meta name="description" content="Get to know me a little bit better." />
      </Head>

      <main className="container mx-auto px-2">
        <h1 className="text-center text-6xl mb-8">Howdy!</h1>
        <p className="text-xl mb-4">I&apos;m Marcin 👋 a 21-year-old full stack developer from Poland. I love to learn new things and build awesome software! I want to share my current knowledge and experience with the world and give something back to the community 💜</p>
        <p className="text-xl mb-4">I&apos;ve spent most of my coding time making medium-sized projects that solve my own problems. Currently, I&apos;m working on bigger apps targeted for a wider audience. While doing it alone I&apos;ve learned to &quot;wear many different hats&quot; and discovered essentials about design, business, infrastructure and got deep into countless JS libraries 😀</p>
        <p className="text-xl mb-4">On my blog you&apos;ll find resources from all of these areas. I&apos;d like to encourage you to work on your own awesome projects independently! 💥</p>
        <p className="text-xl">Feel free to reach me out via Twitter <a href={TWITTER_URL} target="_blank" rel="noreferrer" style={{ color: '#28b8ef' }}>@the_markolo</a></p>
      </main>
    </DefaultLayout>
  );
}

export default AboutPage;
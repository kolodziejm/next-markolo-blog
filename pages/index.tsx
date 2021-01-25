import Head from 'next/head';
import DefaultLayout from '../layouts/DefaultLayout';
import Ghost from '../ghost/Ghost';
import PostCard from '../components/index/PostCard';
import NewsletterForm from '../components/common/NewsletterForm';

export async function getStaticProps() {
  const ghost = new Ghost();

  const posts = await ghost.getPosts();

  return {
    props: {
      posts,
    },
  };
}

function IndexPage({ posts }) {
  const postsList = posts.map(post => (
    <PostCard key={post.id} post={post} />
  ));

  return (
    <DefaultLayout>
      <Head>
        <title>Markolo | Productivity, business and dev tips for the makers!</title>
        <meta name="description" content="Follow my journey and learn from my experience. Improve the skills necessary to succeed in an online business world." />
      </Head>

      <NewsletterForm />

      <main className="container mx-auto">
        <ul className="list-none px-2 sm:max-w-lg sm:mx-auto lg:max-w-full">
          {postsList}
        </ul>
      </main>
    </DefaultLayout>
  );
}

export default IndexPage;
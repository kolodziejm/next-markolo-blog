import React from 'react';
import Ghost from '../../ghost/Ghost';
import Head from 'next/head';
import DefaultLayout from '../../layouts/DefaultLayout';
import PostContentStyles from '../../components/post/PostContentStyles';
import Tag from '../../components/common/Tag';
import NewsletterForm from '../../components/common/NewsletterForm';
import { BASE_URL } from '../../config/constants';

export async function getStaticPaths() {
  const ghost = new Ghost();

  const posts = await ghost.getPosts();
  const postSlugs = posts.map(post => post.slug);

  const paths = postSlugs.map(slug => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const ghost = new Ghost();

  const post = await ghost.getSinglePost(params.slug);

  return {
    props: {
      post,
    },
  };
}

function PostPage({ post }) {
  const tagsList = post.tags.map(tag => (
    <Tag key={tag.id}>{tag.name}</Tag>
  ));

  return (
    <DefaultLayout>
      <Head>
        <title>{post.meta_title} | Markolo</title>
        <meta name="title" content={post.meta_title} />
        <meta name="description" content={post.meta_description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={BASE_URL} />
        <meta property="twitter:title" content={post.meta_title} />
        <meta property="twitter:description" content={post.meta_description} />
        <meta property="twitter:image" content={post.twitter_image} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={post.meta_description} />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:image" content={post.feature_image} />
        {post.canonical_url && <link rel="canonical" href={post.canonical_url} />}
      </Head>
      <PostContentStyles />

      <main className="max-w-screen-md mx-auto px-2">
        <img src={post.feature_image} alt={post.title} className="rounded-lg w-full mb-3" />
        <h1 className="text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">{post.title}</h1>
        <ul className="flex mb-6">
          {tagsList}
        </ul>
        <div className="post-content mb-12" dangerouslySetInnerHTML={{ __html: post.html }} />
        <NewsletterForm postForm />
      </main>
    </DefaultLayout>
  );
}

export default PostPage;

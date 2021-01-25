import Link from 'next/link';
import Tag from '../common/Tag';

type Tag = {
  id: string;
  name: string;
}
interface Props {
  post: {
    tags: Tag[];
    slug: string;
    feature_image: string;
    title: string;
    excerpt: string;
  };
}

function PostCard({post}: Props) {
  const tagsList = post.tags
    .map(tag => (
      <Tag key={tag.id}>{tag.name}</Tag>
    ));

  return (
    <Link
      href="/post/[slug]"
      as={`/post/${post.slug}`}
    >
      <li className="p-4 shadow cursor-pointer lg:flex items-center rounded-lg hover:shadow-lg ease-in-out duration-150 mb-5">
        <img
          src={post.feature_image}
          alt={post.title}
          className="rounded-lg w-full mx-auto mb-2 lg:mr-6 lg:mb-0 lg:max-w-sm lg:m-0"
        />

        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl text-gray-900 leading-snug mb-1">{post.title}</h2>
          <ul className="flex mb-4">
            {tagsList}
          </ul>
          <p className="text-lg text-gray-700">{post.excerpt}</p>
        </div>
      </li>
    </Link>
  );
}

export default PostCard;

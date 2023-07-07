import PostList from './PostList'
import { Post } from '@/types/Post';

export default async function PopularPosts() {
  const response = await fetch(
    'http://backend:3001/posts/popular?quantity=12',
    { next: { revalidate: 60 * 30 } },
  );
  const popularPosts: Post[]  = await response.json();

  return (
    <article>
      <h2 className="font-bold text-lg sm:text-2xl">
        Publicações em alta
      </h2>
      
      <PostList posts={popularPosts} />
    </article>
  );
}

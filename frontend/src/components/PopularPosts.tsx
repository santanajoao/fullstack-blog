import axios from 'axios'
import PostList from './PostList'
import { Post } from '@/types/Post';

export default async function PopularPosts() {
  const popularPosts  = await axios.get<Post[]>('http://backend:3001/posts/popular');

  return (
    <article>
      <h2 className="font-bold text-lg sm:text-2xl">
        Publicações em alta
      </h2>
      
      <PostList posts={popularPosts.data} />
    </article>
  );
}

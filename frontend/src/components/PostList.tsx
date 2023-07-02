import { Post } from "@/types/Post";
import PostItemLink from "./PostItemLink";
import axios from 'axios'

interface Props {
  postsEnpoint: string;
}

export default async function PostList({ postsEnpoint }: Props) {
  const popularPosts = await axios
    .get<Post[]>(`http://backend:3001/posts${postsEnpoint}`);

  return (
    <ul className="grid gap-5 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
      {popularPosts.data.map((post) => (
        <li key={post.title} className="w-full max-w-2xl border-t hover:brightness-90 bg-white transition-[filter]">
          <PostItemLink
            title={post.title}
            date={new Date(post.createdAt)}
            author={post.account.username}
            description={post.description}
            image={`${post.imageUrl}?size=599`}
            link={`/posts/${post.id}`}
          />
        </li>
      ))}
    </ul>
  )
}

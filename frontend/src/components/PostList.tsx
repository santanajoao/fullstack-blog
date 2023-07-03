import { Post } from "@/types/Post";
import PostItemLink from "./PostItemLink";

interface Props {
  posts: Post[];
}

export default async function PostList({ posts }: Props) {
  return (
    <ul className="grid gap-5 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
      {posts.map((post) => (
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

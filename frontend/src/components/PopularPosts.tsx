import { Post } from "@/types/Post";
import PostItemLink from "./PostItemLink";
import axios from "axios";

export default async function PopularPosts() {
  const popularPosts = await axios
    .get<Post[]>('http://backend:3001/posts/popular?quantity=12');
  
  return (
    <article>
      <h2 className="font-bold text-lg sm:text-2xl">
        Publicações em alta
      </h2>
      
      <ul className="grid gap-5 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {popularPosts.data.map((post) => (
          <li key={post.title} className="w-full max-w-2xl border-t hover:brightness-90 bg-white transition-[filter]">
            <PostItemLink
              title={post.title}
              date={new Date(post.createdAt)}
              author={post.user.name}
              description={post.description}
              image={`${post.imageUrl}?size=599`}
              link={`/posts/${post.id}`}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}

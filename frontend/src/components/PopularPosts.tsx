import { TPost } from "@/types/TPost";
import PostItemLink from "./PostItemLink";

export default async function PopularPosts() {
  const postResponse = await fetch('http://backend:3001/posts/popular?quantity=12');
  const popularPosts = await postResponse.json() as unknown as TPost[];
  
  return (
    <article>
      <h2 className="font-bold text-lg sm:text-2xl">
        Publicações em alta
      </h2>
      
      <ul className="grid gap-5 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {popularPosts.map(({ author, createdAt, description, imageUrl, title, id }) => (
          <li key={title} className="w-full max-w-2xl border-t hover:brightness-90 bg-white transition-[filter]">
            <PostItemLink
              title={title}
              date={new Date(createdAt)}
              author={author.name}
              description={description}
              image={`${imageUrl}?size=599`}
              link={`/posts/${id}`}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}

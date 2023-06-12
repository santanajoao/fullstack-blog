import PostItemLink from "./PostItemLink";

type Post = {
  id: string,
  title: string,
  description: string,
  author: string,
  createdAt: string,
  imageUrl: string,
}

export default async function PopularPosts() {
  const postResponse = await fetch('http://backend:3001/posts/popular');
  const popularPosts = await postResponse.json() as unknown as Post[];

  return (
    <article>
      <h2 className="font-bold text-lg sm:text-2xl">
        Publicações em alta
      </h2>

      <ul className="flex space-x-1 mt-3 overflow-y-auto max-w-full hidden-scroll">
        {popularPosts.map(({ author, createdAt, description, imageUrl, title, id }) => (
          <li key={title} className="w-60 flex-shrink-0 overflow-hidden relative rounded-2xl hover:brightness-90 bg-white transition-[filter]">
            <PostItemLink
              title={title}
              author={author}
              date={createdAt}
              description={description}
              image={`${imageUrl}?size=232`}
              link={`/posts/${id}`}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}

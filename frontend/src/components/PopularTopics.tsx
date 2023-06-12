import TopicLink from "./TopicLink";

type Topic = {
  name: string,
  imageUrl: string,
  id: string,
};

export default async function PopularTopics() {
  const topicResponse = await fetch('http://backend:3001/topics/popular');
  const popularTopics = await topicResponse.json() as unknown as Topic[];

  return (
    <article>
      <h2 className="font-bold text-lg sm:text-2xl">
        Explore os tópicos mais falados
      </h2>

      <ul className="flex space-x-3 mt-3 overflow-y-auto max-w-full hidden-scroll">
        {popularTopics.map(({ name, id, imageUrl }) => (
          <li key={id} className="h-28 w-28 flex-shrink-0 rounded-2xl overflow-hidden relative group">
            <TopicLink image={`${imageUrl}?size=256`} link={`/topics/${id}`} topic={name} />
          </li>
        ))}
      </ul>
    </article>
  )
}

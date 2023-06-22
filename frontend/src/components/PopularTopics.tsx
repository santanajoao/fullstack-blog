import { TTopic } from "@/types/TTopic";
import TopicLink from "./TopicLink";
import axios from 'axios';

export default async function PopularTopics() {
  const popularTopics = await axios
    .get<TTopic[]>('http://backend:3001/topics/popular?quantity=12');
  
  return (
    <article>
      <h2 className="font-bold text-lg sm:text-2xl">
        Explore os tópicos mais falados
      </h2>

      <ul className="mt-3 grid grid-flow-col grid-rows-3 gap-2 sm:grid-rows-2 lg:grid-rows-1">
        {popularTopics.data.map(({ name, id, imageUrl }) => (
          <li key={id} className="w-full aspect-square rounded-2xl overflow-hidden relative group">
            <TopicLink image={`${imageUrl}?size=320`} link={`/topics/${id}`} topic={name} />
          </li>
        ))}
      </ul>
    </article>
  )
}

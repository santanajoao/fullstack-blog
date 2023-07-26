'use client';

import { AuthContext } from '@/contexts/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineLoading } from 'react-icons/ai';

interface Params {
  postId: string;
}

type LikesReponse = {
  postLikes: number;
  userLiked: boolean;
};

export default function LikeButton({ postId }: Params) {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const router = useRouter();

  const checkForLike = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get<LikesReponse>(`http://localhost:3001/likes/${user?.id}/${postId}`);
      setLiked(data.userLiked);
      setLikeCount(data.postLikes);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    checkForLike();
  }, [user]);

  const handleLike = async () => {
    if (!user) {
      return router.push('/signin');
    }

    setLoading(true);

    try {
      const { 'blog.session.token': token } = parseCookies();
      const data = { postId, accountId: user.id };
      const headers = { Authorization: token };

      if (liked) {
        await axios.delete('http://localhost:3001/likes', { data, headers });
      } else {
        await axios.post('http://localhost:3001/likes', data, { headers });
      }

      setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
      setLiked((prev) => !prev);
    } catch (error) {
      console.error(error);
    }

    return setLoading(false);
  };

  const HeartIcon = liked ? AiFillHeart : AiOutlineHeart;

  return (
    <button
      type="button"
      onClick={handleLike}
      className="h-fit rounded-full flex gap-1 hover:text-red-500 items-center"
      disabled={loading}
    >
      <span className="sr-only">{loading ? 'Carregando' : 'Gostar'}</span>
      <span>{likeCount}</span>
      {loading
        ? <AiOutlineLoading className="animate-spin text-1xl" />
        : <HeartIcon className="text-2xl" />}
    </button>
  );
}

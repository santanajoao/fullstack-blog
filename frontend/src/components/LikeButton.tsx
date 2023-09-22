'use client';

import { useUser } from '@/contexts/AuthContext';
import { clientApiUrl } from '@/services';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineLoading } from 'react-icons/ai';
import { toast } from 'react-toastify';

interface Params {
  postId: string;
}

type LikesReponse = {
  postLikes: number;
  userLiked: boolean;
};

export default function LikeButton({ postId }: Params) {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(isLoading);

  const checkForLike = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get<LikesReponse>(
        `${clientApiUrl}/likes/${user?.id}/${postId}`,
      );
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
    if (!user) return router.push('/signup');

    setLoading(true);

    try {
      const { 'blog.session.token': token } = parseCookies();
      const data = { postId, accountId: user?.id };
      const headers = { Authorization: token };

      if (liked) {
        await axios.delete(`${clientApiUrl}/likes`, { data, headers });
      } else {
        await axios.post(`${clientApiUrl}/likes`, data, { headers });
      }

      setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
      setLiked((prev) => !prev);
    } catch (error) {
      toast.error('Erro. Não foi possível dar like.');
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

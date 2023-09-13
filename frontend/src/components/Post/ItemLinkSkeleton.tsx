import React from 'react';

export default function ItemLinkSkeleton() {
  return (
    <div className="h-full w-full flex flex-col gap-1 pt-2 px-1 pb-3">
      <div
        className="object-cover rounded-2xl w-full aspect-video bg-primaryGreen bg-opacity-50"
      />
      <div className="text-xs mt-1 h-2 bg-gray-300" />
      <div className="font-bold text-lg leading-6 line-clamp-3 break-words bg-gray-300 h-6" />
      <div className="text-justify line-clamp-4 break-words leading-5 bg-gray-300 h-20" />
    </div>
  );
}

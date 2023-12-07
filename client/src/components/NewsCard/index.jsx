// CardComponent.js
import React from 'react';

const NewsCard = ({ news }) => {
  return (
    <div className='flex-col max-w-sm lg:max-w-none lg:w-[20rem] mx-4 w-full h-[12rem] lg:h-[24rem] px-2 py-4 bg-gray-50 drop-shadow-md rounded-md flex justify-around items-end text-center text-neutral-900'>
              <img src={news.image} alt={news.new} className='w-full h-[12rem] object-cover mb-2 rounded-md' />
<div className='w-56 h-20 flex-col text-left mb-8 '>
        <h2 className='text-title font-title font-bold'>{news.category}</h2>
        <p className='text-sans font-subtitle'>{news.detail}</p>
        <p className='text-xs text-gray-500 mt-2'>{new Date(news.dateTime).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default NewsCard;

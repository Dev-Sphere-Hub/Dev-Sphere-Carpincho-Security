// NewsCard.js
import React from 'react';
import '../../index.css';

const NewsCard = ({ news, isZoomed }) => {
  return (
    <div className={`flex-col max-w-sm lg:max-w-none lg:w-[20rem] mx-4 w-full h-[12rem] lg:h-[19rem] px-2 py-4 bg-white drop-shadow-md rounded-md flex justify-around items-start text-center text-neutral-900 ${isZoomed ? 'lift-up is-zoomed' : ''}`}>
      <img src={news.image} alt={news.new} className={`self-center w-full lg:max-w-[17rem] lg:max-h-[10rem] h-[12rem] object-cover mb-5 rounded-lg ${isZoomed ? 'scale-up is-zoomed' : ''}`} />
      <div className='w-56 h-20 flex-col text-left mb-[6rem]'>
        <h2 className='text-title font-title font-bold'>{news.category}</h2>
        <p className='text-sans font-subtitle'>{news.detail}</p>
        <p className='text-xs text-gray-500 mt-2'>{new Date(news.dateTime).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default NewsCard;

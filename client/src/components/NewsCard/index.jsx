import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const translateCategory = (category) => {
  const categoryTranslations = {
    emergencies: 'Emergencia',
    featured_events: 'Evento Destacado',
    unauthorized_person: 'Persona No Autorizada',
    unauthorized_vehicle: 'Vehículo No Autorizado'
  }

  return categoryTranslations[category] || category
}

const NewsCard = ({ news, onClick, getImageUrlForCategory }) => {
  return (
    <div
      className='flex w-[21rem] my-4 p-3 pb-5 bg-colorCustom6 drop-shadow-md rounded-xl items-start text-center text-neutral-900'
      onClick={() => onClick(news)}
    >
      <img
        src={getImageUrlForCategory(news.category)}
        alt={news.new}
        className='mx-2 self-center rounded-lg h-[2.7rem] w-[2rem]'
      />
      <div className='flex-col text-left'>
        <p className='text-gray-600 text-sm'>{news?.author?.fullName}</p>
        <h2 className='text-title font-title font-bold'>
          {translateCategory(news.category)}
        </h2>
        <p className='text-xs text-gray-600'>
          {new Date(news.date).toLocaleString()}
        </p>
      </div>
      <IoIosArrowForward className='ml-auto self-center text-2xl text-gray-500' />
    </div>
  )
}

export default NewsCard

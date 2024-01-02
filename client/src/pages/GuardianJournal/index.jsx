import React, { useState, useEffect } from 'react'
import useNavStore from '../../store/NavStore/navStore'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import NewsCard from '../../components/NewsCard'
import NewsModal from '../../components/NewsModal'
import axios from 'axios'
import { endpoints } from '../../constants/api'
import { IoMdAddCircleOutline } from 'react-icons/io'
import Welcome from '../../assets/images/Welcome.png'
import { TbHandClick } from 'react-icons/tb'

const GuardianJournal = () => {
  const { setActiveIndex } = useNavStore()
  const [formData, setFormData] = useState({
    category: '',
    detail: '',
    date: ''
  })
  const [novedades, setNovedades] = useState([])
  const [selectedNews, setSelectedNews] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [categoryTranslations] = useState({
    Emergencia: 'emergencies',
    'Evento Destacado': 'featured_events',
    'Persona No Autorizada': 'unauthorized_person',
    'Vehículo No Autorizado': 'unauthorized_vehicle'
  })

  useEffect(() => {
    axios.get(endpoints.nuevos)
      .then(res => {
        setNovedades(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setActiveIndex('reportes')
    return () => setActiveIndex(null)
  }, [])

  const handleAddNews = (newNews) => {
    setNovedades([...novedades, newNews])
  }

  const handleCardClick = (news) => {
    setSelectedNews(news)
  }

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const categoryImageMap = {
    emergencies: 'https://source.unsplash.com/featured/?emergency',
    featured_events: 'https://source.unsplash.com/featured/?event',
    unauthorized_person: 'https://source.unsplash.com/featured/?people',
    unauthorized_vehicle: 'https://source.unsplash.com/featured/?car',
    default: 'https://source.unsplash.com/featured/?report'
  }

  const getImageUrlForCategory = (category) => {
    return categoryImageMap[category] || categoryImageMap.default
  }

  const { user } = useAuthStore()
  return (
    <div className='flex justify-evenly text-center w-full'>
      <div className='flex-col max-w-[500px] justify-center'>
        <h2 className='mx-auto text-3xl font-bold text-white shadow-lg shadow-black'>Novedades</h2>
        <IoMdAddCircleOutline
          onClick={handleOpenModal}
          className='hover:text-gray-300 text-gray-400 cursor-pointer ml-auto'
          size={50}
        />
        <div className='overflow-y-scroll custom-scroll h-[30rem]'>
          {novedades.map((novedad, index) => (
            <NewsCard
              key={index}
              news={novedad}
              onClick={() => handleCardClick(novedad)}
              getImageUrlForCategory={getImageUrlForCategory}
            />
          ))}
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className='flex flex-col w-[30rem] bg-[#EDEDED] h-[36rem] mx-auto border-2 p-2 rounded-md'>
          {selectedNews
            ? (
              <div className='mx-auto'>
                <img
                  src={getImageUrlForCategory(selectedNews.category)}
                  alt={selectedNews.news}
                  className='w-full max-w-[20rem] h-[11rem] object-cover mb-5 rounded-xl mx-auto'
                />
                <div className='px-2 w-full h-20 flex-col text-left'>
                  <p className='text-sans font-subtitle mt-2'>{`Reportado por: ${selectedNews.author.fullName}`}</p>
                  <h2 className='text-title font-title font-bold'>{selectedNews.category}</h2>
                  <p className='text-sans font-subtitle'>{selectedNews.detail}</p>
                  <p className='text-xs text-gray-500 mt-2'>{new Date(selectedNews.date).toLocaleString()}</p>
                </div>
              </div>
              )
            : (
              <div className=''>
                <div className='flex flex-col justify-start items-center'>
                  <h3 className='text-2xl font-semibold mb-2 text-gray-700'>Bienvenido {user?.name || 'a Carpincho Security'}</h3>
                  <br />
                  <div className='h-full' />
                  <img src={Welcome} alt='Welcome' className='w-full max-w-[20rem] h-[20rem] object-cover mb-5 rounded-xl mx-auto' />
                  <br />
                  <p className='text-center text-md text-gray-600 px-4'>Explora las últimas alertas y novedades de seguridad.</p>
                  <p>Selecciona una novedad para obtener más detalles.</p>
                  <div className='my-2'>
                    <TbHandClick size={30} className='m-auto' />
                  </div>
                </div>
              </div>
              )}
        </div>
      </div>
      <NewsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmitSuccess={handleAddNews}
        formData={formData}
        setFormData={setFormData}
        categories={Object.keys(categoryTranslations)}
      />
    </div>
  )
}

export default GuardianJournal

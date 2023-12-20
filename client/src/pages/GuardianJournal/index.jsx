import React, { useState, useEffect } from 'react';
import useNavStore from '../../store/NavStore/navStore';
import { useAuthStore } from '../../store/AuthStore/AuthStore';
import NewsCard from '../../components/NewsCard';
import NewsModal from '../../components/NewsModal'; 
import axios from 'axios';
import { endpoints } from '../../constants/api';

const GuardianJournal = () => {
  const { setActiveIndex } = useNavStore();
  const [formData, setFormData] = useState({
    category: '',
    detail: ''
  });
  const [categories, setCategories] = useState([]);

  const [novedades, setNovedades] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(endpoints.nuevos)
      .then(res => {
        setNovedades(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setActiveIndex('reportes');
    return () => setActiveIndex(null);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(endpoints.nuevos, formData)
      .then(res => {
        console.log('Novedad registrada con éxito.');
        setNovedades([...novedades, res.data.data]);
      })
      .catch(err => console.log(err));
    setFormData({ category: '', detail: '' });
    setShowModal(false);
  };

  const handleCardClick = (news) => {
    setSelectedNews(news);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const categoriess = ['emergencies', 'featured_events', 'unauthorized_person', 'unauthorized_vehicle'];
  const { user } = useAuthStore()
  return (
    <div className='flex justify-evenly text-center w-full'>
      <div className='flex-col max-w-[500px] justify-center'>
        <h2 className='mx-auto font-bold'>Novedades</h2>
        {novedades.map((novedad, index) => (
          <NewsCard
            key={index}
            news={novedad}
            isZoomed={selectedNews === novedad}
            onClick={() => handleCardClick(novedad)}
          />
        ))}
      </div>
      <div className='hidden lg:block'>
        <div className='flex flex-col w-[30rem] bg-[#EDEDED] h-[36rem] mx-auto border-2 p-2 rounded-md'>
          {selectedNews ? (
            <div className='mx-auto'>
              <img src='https://source.unsplash.com/featured/?warning' alt={selectedNews.new} className='w-full max-w-[20rem] h-[11rem] object-cover mb-5 rounded-xl mx-auto' />
              <div className=' px-2 w-full h-20 flex-col text-left'>
                <p className='text-sans font-subtitle mt-2'>{`Reportado por: ${selectedNews.author.fullName}`}</p>
                <h2 className='text-title font-title font-bold'>{selectedNews.category}</h2>
                <p className=' text-sans font-subtitle'>{selectedNews.detail}</p>
                <p className='text-xs text-gray-500 mt-2'>{new Date(selectedNews.date).toLocaleString()}</p>
              </div>
            </div>
          ) : (
            <div className='flex flex-col justify-start items-center h-full'>
            <h3 className='text-2xl font-semibold mb-2 text-gray-700'>Bienvenido {user?.name || 'a Carpincho Security'}</h3>
            <p className='text-center text-md text-gray-600 px-4'>Explora las últimas alertas y novedades de seguridad.
             Selecciona una novedad para obtener más detalles.</p>
          </div>
          )}
        </div>
      </div>
      <button 
        onClick={handleOpenModal} 
        className='h-9 p-2 bg-blue-500 text-white rounded'
      >
        Agregar Novedad
      </button>
      <NewsModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onSubmit={handleSubmit} 
        formData={formData} 
        setFormData={setFormData} 
        categories={categories}
      />
    </div>
  );
};

export default GuardianJournal;

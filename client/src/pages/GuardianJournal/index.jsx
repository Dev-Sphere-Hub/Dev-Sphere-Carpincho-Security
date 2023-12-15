import React, { useState, useEffect } from 'react';
import useNavStore from '../../store/NavStore/navStore';
import NewsCard from '../../components/NewsCard';
import axios from 'axios';
import { endpoints } from '../../constants/api';
import { CiCirclePlus } from "react-icons/ci";

const GuardianJournal = () => {
  const { setActiveIndex } = useNavStore();
  const [formData, setFormData] = useState({
    category: '',
    detail: ''
  });

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
        setNovedades([...novedades, formData]);
      })
      .catch(err => console.log(err));

    setFormData({
      category: '',
      detail: ''
    });

    setShowModal(false);
  };

  const handleCardClick = (news) => {
    setSelectedNews(news);
  };

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
      <img src="https://source.unsplash.com/featured/?warning" alt={selectedNews.new} className='w-full max-w-[20rem] h-[11rem] object-cover mb-5 rounded-xl mx-auto' />
      <div className=' px-2 w-full h-20 flex-col text-left'>
        <p className='text-sans font-subtitle mt-2'>{`Reportado por: ${selectedNews.author.fullName}`}</p>
        <h2 className='text-title font-title font-bold'>{selectedNews.category}</h2>
        <p className=' text-sans font-subtitle'>{selectedNews.detail}</p>
        <p className='text-xs text-gray-500 mt-2'>{new Date(selectedNews.date).toLocaleString()}</p>
      </div>
    </div>
  ) : (
    <div className='flex justify-center items-center h-full '>
      <p className="text-center">Selecciona una novedad para ver más información detallada.</p>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

export default GuardianJournal;

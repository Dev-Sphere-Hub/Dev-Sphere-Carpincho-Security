import React, { useState } from 'react';
import axios from 'axios';
import { endpoints } from '../../constants/api';

const NovedadesModal = ({ showModal, setShowModal, setNovedades, novedades, formData, setFormData }) => {
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén llenos
    if (!formData.category || !formData.detail) {
      console.log('Por favor, complete todos los campos.');
      return;
    }

    // Agregar la novedad al estado de novedades
    setNovedades([...novedades, formData]);

    // Enviar datos de formData para registrar novedad
    axios.post(endpoints.nuevos, formData)
      .then(res => {
        console.log('Novedad registrada con éxito.');
        setNovedades([...novedades, formData]);
      })
      .catch(err => console.log(err));

    // Limpiar el formulario 
    setFormData({
      category: '',
      detail: ''
    });

    // Ocultar el modal después de enviar
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-900 opacity-75' />
          <div className='relative z-10 bg-white p-4 rounded-md'>
            <h2 className='text-xl font-bold mb-4'>Registrar Nueva Novedad</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='category' className='block text-sm font-medium text-gray-700'>Categoría:</label>
                <input type='text' id='category' name='category' value={formData.category} onChange={handleInputChange} className='mt-1 p-2 border border-gray-300 rounded-md w-full' />
              </div>
              <div className='mb-4'>
                <label htmlFor='detail' className='block text-sm font-medium text-gray-700'>Detalle:</label>
                <textarea id='detail' name='detail' value={formData.detail} onChange={handleInputChange} className='mt-1 p-2 border border-gray-300 rounded-md w-full'></textarea>
              </div>
              <div className='flex justify-end'>
                <button type='button' onClick={() => setShowModal(false)} className='mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md cursor-pointer'>Cancelar</button>
                <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer'>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NovedadesModal;

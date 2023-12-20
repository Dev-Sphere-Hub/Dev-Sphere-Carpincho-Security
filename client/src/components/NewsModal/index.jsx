// components/NewsModal.js
import React from 'react';

const NewsModal = ({ isOpen, onClose, onSubmit, formData, setFormData, categories }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center'>
      <div className='bg-white p-5 rounded-lg shadow-lg'>
        <h2 className='font-bold text-lg mb-4'>Agregar Novedad</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label>Categoría</label>
            <select 
              name='category'
              value={formData.category}
              onChange={handleInputChange}
              className='border-2 w-full p-2 rounded'
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className='mt-4'>
            <label>Detalle</label>
            <textarea 
              name='detail'
              value={formData.detail}
              onChange={handleInputChange}
              className='border-2 w-full p-2 rounded'
            />
          </div>
          <div className='flex justify-end mt-4'>
            <button type='button' onClick={onClose} className='bg-gray-500 text-white p-2 rounded mr-2'>Cerrar</button>
            <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsModal;

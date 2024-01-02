import React, { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import axios from 'axios'
import { endpoints } from '../../constants/api'
import { useAuthStore } from '../../store/AuthStore/AuthStore'

const NewsModal = ({ isOpen, onClose, categories }) => {
  const { token } = useAuthStore()
  const [formData, setFormData] = useState({
    category: '',
    detail: '',
    date: ''
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const transformedFormData = {
        ...formData
      }

      const response = await axios.post(endpoints.nuevos, transformedFormData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.data) {
        setFormData({ category: '', detail: '', date: '' })
      }
    } catch (error) {
      console.error('Error al enviar la novedad:', error)
    } finally {
      setLoading(false)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50'>
      <div className='bg-white p-5 rounded-lg shadow-lg w-5/6 md:w-1/2 lg:w-1/3'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold text-gray-700'>Reportar Novedad</h2>
          <RiCloseLine
            onClick={onClose}
            className='text-gray-500 cursor-pointer hover:text-gray-700'
            size={25}
          />
        </div>
        <form onSubmit={handleSubmit} className='mt-4'>
          <div className='mb-4'>
            <label htmlFor='category' className='block text-gray-700 text-sm font-bold mb-2'>
              Categoría
            </label>
            <select
              name='category'
              value={formData.category}
              onChange={handleInputChange}
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            >
              <option value=''>Seleccione una categoría</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-4'>
            <label htmlFor='detail' className='block text-gray-700 text-sm font-bold mb-2'>
              Detalle
            </label>
            <textarea
              name='detail'
              value={formData.detail}
              onChange={handleInputChange}
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              rows='4'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='date' className='block text-gray-700 text-sm font-bold mb-2'>
              Fecha (formato AAAA-MM-DD)
            </label>
            <input
              type='date'
              name='date'
              value={formData.date}
              onChange={handleInputChange}
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Reportar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewsModal

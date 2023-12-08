import React, { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel'
import useNavStore from '../../store/NavStore/navStore'

const GuardianJournal = () => {
  const [formData, setFormData] = useState({
    dateTime: '',
    category: '',
    detail: ''
  })

  const [novedades, setNovedades] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar que todos los campos estén llenos
    if (!formData.dateTime || !formData.category || !formData.detail) {
      console.log('Por favor, complete todos los campos.')
      return
    }

    // Agregar la novedad al estado de novedades
    setNovedades([...novedades, formData])

    // Imprimir la fecha en la consola
    console.log('Fecha almacenada:', formData.dateTime)

    // Limpiar el formulario después de enviar
    setFormData({
      dateTime: '',
      category: '',
      detail: ''
    })

    // Ocultar el modal después de enviar
    setShowModal(false)
  }

  const { setActiveIndex } = useNavStore()

  useEffect(() => {
    setActiveIndex('reportes')
    return () => setActiveIndex(null)
  }, [])

  return (
    <div id='novedades' className='w-[100%] min-h-[500px] h-auto xl:min-w-[1280px] flex flex-col items-center gap-[5rem] border-2 p-2 rounded-md '>
      <h2 className='self-center lg:self-start text-3xl w-[100%] lg:w-[860px]  font-bold mx-auto lg:text-left'>Novedades</h2>
      <div className='hidden lg:block'>
        <Carousel />
      </div>
      {/* Modal para el registro de novedades */}
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-900 opacity-75' />
          <div className='relative max-w-md w-full bg-white rounded-lg p-6'>
            <h2 className='text-2xl font-bold mb-4'>Registrar Novedad</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='dateTime'>
                  Fecha / Hora:
                </label>
                <input
                  type='datetime-local'
                  id='dateTime'
                  name='dateTime'
                  value={formData.dateTime}
                  onChange={handleInputChange}
                  className='w-full bg-gray-200 border-2 border-gray-200 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='category'>
                  Categoría:
                </label>
                <select
                  id='category'
                  name='category'
                  value={formData.category}
                  onChange={handleInputChange}
                  className='w-full bg-gray-200 border-2 border-gray-200 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                  required
                >
                  <option value='' disabled>
                    Seleccionar Categoría
                  </option>
                  <option value='Emergencias'>Emergencias</option>
                  <option value='Eventos Destacados'>Eventos Destacados</option>
                  <option value='Personas No Autorizadas'>Personas No Autorizadas</option>
                  <option value='Vehiculo No Autorizado'>Vehículo No Autorizado</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='detail'>
                  Detalle:
                </label>
                <textarea
                  id='detail'
                  name='detail'
                  value={formData.detail}
                  onChange={handleInputChange}
                  className='w-full bg-gray-200 border-2 border-gray-200 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
                  required
                />
              </div>
              <div className='flex items-center justify-end mt-4'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  Registrar Novedad
                </button>
                <button
                  className='ml-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className='flex flex-col gap-4 md:flex-row flex-wrap md:max-w-[80%] md:m-auto justify-center'>
        {/* Renderizar las tarjetas de novedades */}
        {novedades.map((novedad, index) => (
          <div
            key={index}
            className='max-w-sm mx-4 w-full  h-32 px-2 py-4 bg-gray-50 drop-shadow-md rounded-md flex justify-around items-center text-center text-neutral-900'
          >
            <div className='w-56 h-20 flex-col text-left'>
              <h2 className='text-title font-title font-bold'>{novedad.category}</h2>
              <p className='text-sans font-subtitle'>{novedad.detail}</p>
              <p className='text-xs text-gray-500 mt-2'>{new Date(novedad.dateTime).toLocaleString()}</p>
            </div>
          </div>
        ))} {/* Ícono de agregar fuera de la tarjeta */}
        <div
          className='max-w-[22rem] h-[13.5rem]rounded-lg flex justify-center items-center self-center cursor-pointer hover:bg-gray-300'
          onClick={() => setShowModal(true)}
        >
          {/* Ícono para pantallas grandes (Desktop) */}
          <div className='hidden lg:block'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-plus'
            >
              <line x1='12' y1='5' x2='12' y2='19' />
              <line x1='5' y1='12' x2='19' y2='12' />
            </svg>
          </div>

          {/* Ícono para pantallas pequeñas (Mobile) */}
          <div className='w-16 h-16 lg:hidden bg-gray-600 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-plus'
            >
              <line x1='12' y1='5' x2='12' y2='19' />
              <line x1='5' y1='12' x2='19' y2='12' />
            </svg>
          </div>
        </div>
      </div>
    </div>

  )
}

export default GuardianJournal

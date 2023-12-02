import React from 'react'
import { Link } from 'react-router-dom'
import { BiTimeFive } from 'react-icons/bi'

const LatestArrivals = () => {
  return (
    <section className='w-[100%] min-w-[300px] flex flex-col items-center gap-3'>
      <h2 className='tituloGeneral w-[90%] font-titulo font-semibold text-xl text-colorCustom4 flex flex-row justify-between items-center'>Novedades
        <Link to='/novedades' className='font-parrafo font-light text-sm text-gray-500 hover:text-colorCustom1 transition-colors ease-out duration-700'>Ver mas</Link>
      </h2>

      <section className='sweepList w-full h-[200px] min-w-[300px] flex justify-center items-center'>
        <section className='w-[280px] sm:w-[300px] h-[150px] bg-yellow-100 p-4 rounded-lg flex flex-col gap-2 justify-center shadow-custom'>
          <h2 className='titleX w-full flex justify-between items-center font-titulo font-semibold text-lg text-colorCustom4 gap-1'>Reporte: <span className='font-medium'>Vidrio roto</span>  <span className='ml-auto font-light text-xs capitalize'>hoy</span></h2>
          <p className='text-xs font-light text-colorCustom4'>Registrado por <span>pepito gamer</span></p>
          <section className='sectionImg w-[100%] flex gap-2'>
            <img className='w-[25px] h-[25px] rounded-full object-cover' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381199/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_6_oboesw.jpg' alt='carpinxho x' />
            <img className='w-[25px] h-[25px] rounded-full object-cover' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381197/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_5_mvjldf.jpg' alt='carpinxho x' />
            <img className='w-[25px] h-[25px] rounded-full object-cover' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_2_smh9k5.jpg' alt='carpinxho x' />
          </section>
          <section className='registerTime flex justify-start items-center gap-1 text-[10px] font-light text-colorCustom4'>
            <BiTimeFive className='text-base' />
            <p>2:30 PM</p>
            <p>-</p>
            <p>6:00 PM</p>
          </section>
        </section>
      </section>

    </section>
  )
}

export default LatestArrivals

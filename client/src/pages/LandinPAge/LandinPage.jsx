import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandinPage = () => {
  const navigate = useNavigate()
  return (
    <section className='landingPage relative w-[100%] h-screen bg-green-300 left-0 top-0'>
      <section className='banner w-[100%] h-[70vh] md:h-[100%] overflow-hidden bg-green-300'>
        <video className='w-[100%] h-[100%] object-cover' muted loop autoPlay>
          <source src='https://res.cloudinary.com/dpiwmbsog/video/upload/v1701924112/carpincho/Gen-2_2104670588_Portrait_of_a_cartoo_M_10_tpmqc9.mp4' type='video/mp4' />
        </video>
      </section>

      <section
        className='contenudoTextios w-[100%] md:w-[50%] md:h-[100%] md:absolute md:top-0 md:left-0 md:flex md:flex-col md:justify-center md:items-center gap-5 bg-[#6935b75e] shadow-[0_0_0_6px_rgba(35,17,44,0.05)] backdrop-blur-[6px]'
      >
        <h1 className='font-bold text-white fonrt-titulo text-5xl px-1'>Bienvenido a Carpincho Security !!!</h1>
        <p className='font-normal font-parrafo text-md text-left text-yellow-100 px-4'>Carpincho Security redefine la seguridad en 🏢 edificios, 🏡 countries y establecimientos al proporcionar un sistema integral de <strong>control de acceso</strong>. Diseñada para brindar tranquilidad, nuestra aplicación permite a los profesionales de seguridad tener un control total sobre las <strong>entradas, salidas, paquetería y entregas</strong>. Con Carpincho Security, cada interacción queda registrada, brindando una gestión eficiente y segura. ¡<strong>Tu paz de mente</strong> es nuestra prioridad! 🛡️🔒</p>
      </section>
      <section className='botonesLogin absolute md:top-0 top-[25%] left-0 md:left-[60%] md:w-[250px] md:h-[100%] w-[100%] h-[260px] flex flex-row  md:flex-col justify-center items-center gap-2 md:gap-5 '>

        <button
          className='registro rounded-md w-[250px] h-[150px] capitalize font-titulo font-medium text-xl text-white bg-[#6935b75e] shadow-[0_0_0_5px_rgba(35,17,44,0.05)] backdrop-blur-[0.5px] hover:bg-[#cd2def8c] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:backdrop-blur-[4px] transition-all ease-in-out duration-500'
          onClick={(e) => navigate('/register')}
        >registrarme
        </button>
        <button
          className='registro rounded-md w-[250px] h-[150px] capitalize font-titulo font-medium text-xl text-white bg-[#6935b75e] shadow-[0_0_0_5px_rgba(35,17,44,0.05)] backdrop-blur-[0.5px] hover:bg-[#cd2def8c] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:backdrop-blur-[4px] transition-all ease-in-out duration-500'
          onClick={(e) => navigate('/login')}
        >login
        </button>
      </section>
    </section>
  )
}

export default LandinPage

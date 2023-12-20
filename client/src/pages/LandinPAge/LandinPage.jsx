import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandinPage = () => {
  const navigate = useNavigate()
  return (
    <section className='landingPage relative w-full min-h-screen left-0 top-0 flex flex-col justify-center items-center lg:flex-col'>

      <section className='banner absolute top-0 left-0 w-full h-full overflow-hidden'>
        <video className='w-full h-full object-cover' muted loop autoPlay>
          <source src='https://res.cloudinary.com/dpiwmbsog/video/upload/v1703023771/carpincho/WhatsApp_Video_2023-12-19_at_18.53.55_jx2ttz.mp4' type='video/mp4' />
        </video>
      </section>

      <section
        className='contenudoTextios w-[100%] h-1/2 rounded-sm  md:w-1/2 md:h-full absolute top-0 md:top-0 md:left-0 flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:items-center gap-5 bg-gradient-to-r from-green-500 via-green-700 to-blue-400 shadow-[0_0_0_10px_rgba(35,17,44,0.200)] backdrop-blur-[6px] opacity-80'
      >
        <h1 className='font-bold text-slate-800 fonrt-titulo  text-2xl px-1 lg:text-5xl'>Bienvenido a Carpincho Security !!!</h1>
        <p className='font-normal font-parrafo text-sm lg:text-md text-left text-slate-200 px-4'><b>Carpincho Security</b> redefine la seguridad en 🏢 edificios, 🏡 countries y establecimientos al proporcionar un <b>sistema</b> integral de <strong>control de acceso</strong>. Diseñada para brindar tranquilidad, nuestra aplicación permite a los profesionales <b>de seguridad</b> tener un control total sobre las <strong>entradas, salidas, paquetería y entregas</strong>. <b>Con Carpincho Security</b>, cada interacción queda registrada, brindando una gestión eficiente y segura. ¡<strong>Tu paz de mente</strong> es nuestra prioridad! 🛡️🔒</p>
      </section>

      {/* botones */}
      <section className='botonesLogin absolute md:top-0 bottom-0 mx-auto w-full max-w-[360px] h-1/2 p-3  flex flex-col justify-center items-start  md:left-[60%] md:w-[250px] md:h-full md:flex-col md:justify-center md:items-center gap-4 md:gap-5 '>

        <button
          className='registro rounded-md w-[200px] h-[100px] md:w-[250px] md:h-[150px] capitalize font-titulo font-medium text-xl text-slate-700
          bg-gradient-to-r from-green-500 via-green-700 to-blue-400 opacity-75 shadow-[0_0_0_5px_rgba(35,17,44,0.200)] backdrop-blur-md transition-all ease-linear duration-300
          hover:bg-gradient-to-l hover:from-green-500 hover:via-blue-500 hover:to-blue-400 hover:text-slate-300 hover:opacity-90 hover:shadow-[0_0_0_5px_rgba(17,27,44,0.250)] hover:backdrop-blur-lg hover:transition-all hover:ease-in-out hover:duration-300'
          onClick={(e) => navigate('/register')}
        >registrarme
        </button>
        <button
          className='registro rounded-md w-[200px] h-[100px] md:w-[250px] md:h-[150px] capitalize font-titulo font-medium text-xl text-slate-700 ml-auto md:ml-0
          bg-gradient-to-r from-green-500 via-green-700 to-blue-400 opacity-75 shadow-[0_0_0_5px_rgba(35,17,44,0.200)] backdrop-blur-md transition-all ease-linear duration-300
          hover:bg-gradient-to-l hover:from-green-500 hover:via-blue-500 hover:to-blue-400 hover:text-slate-300 hover:opacity-90 hover:shadow-[0_0_0_5px_rgba(17,27,44,0.250)] hover:backdrop-blur-lg hover:transition-all hover:ease-in-out hover:duration-300'
          onClick={(e) => navigate('/login')}
        >login
        </button>
      </section>
    </section>
  )
}

export default LandinPage

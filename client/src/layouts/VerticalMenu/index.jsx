import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import { BiRedo, BiSolidTruck, BiSolidTimeFive, BiSolidReport, BiCaretRight } from 'react-icons/bi'
import useNavStore from '../../store/NavStore/navStore'

const VerticalMenu = () => {
  const { activeIndex } = useNavStore()
  const [activeNavVerticas, setActiveNavVerticas] = useState(false)
  const navigate = useNavigate()
  const menuRef = useRef(null)

  const handleClickNavVerticas = (e) => {
    e.preventDefault()
    setActiveNavVerticas(!activeNavVerticas)
  }

  const handleClickOutsideMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setActiveNavVerticas(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideMenu)

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu)
    }
  }, [])

  const imageUser = 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1701381196/carpincho/portrait_of_a_cartoon_capybara_with_sunglasses_and_ujhmyj.jpg'
  return (
    <div ref={menuRef} className='absolute top-0 h-[calc(100vh)] lg:absolute lg:top-0 lg:h-[calc(100vh)] lg:w-auto] xl:w-auto flex justify-center items-center content-center lg:justify-start lg:items-start bg-blue-300'>

      <nav className={`navVerical fixed z-30 navVertical w-auto h-auto ${activeNavVerticas ? 'left-0 lg:left-0 ' : '-left-[52px] lg:-left-[300px] '} transition-all ease-linear duration-200 px-1 py-4 bg-[#f4f3f3] rounded-r-lg lg:top-[60px] lg:w-[300px] lg:h-[calc(100%-65px)] lg:p-2 xl:h-[calc(100%-65px)]  shadow-custom`}>
        <ul className='navMenuVert pl-1 flex flex-col flex-nowrap gap-1'>
          <li>
            <button
              className='customButton w-[40px] h-[40px] rounded-full flex justify-center items-center text-xl lg:w-[98%] lg:h-[250px] lg:flex-col lg:flex-nowrap lg:justify-center lg:items-center lg:gap-2 lg:pl-5 '
              onClick={() => navigate('/historial/')}
            >
              <img
                className='w-full h-full lg:w-[150px] lg:h-[150px] object-cover rounded-full'
                title='imagen perfil del usuario'
                src={imageUser}
                alt='imagen de perfil del usuario'
              />
              <span className='hidden lg:block font-semibold text-lg text-center'>Usuario</span>
            </button>
          </li>
          <li>
            <button
              className={`customButton bg-colorCustom5 w-[40px] h-[40px] rounded-md flex justify-center items-center text-xl lg:w-[98%] lg:flex-row lg:flex-nowrap lg:justify-start lg:items-center lg:gap-2 lg:pl-5  hover:bg-colorCustom1 transition-all ease-linear duration-300 ${activeIndex === 'ingresoEgreso' && activeIndex !== null ? 'bg-colorCustom2' : 'bg-white'} `}
              onClick={() => navigate('/historial/ingresoEgreso')}
            >
              <BiRedo />
              <span className='hidden lg:block font-semibold text-lg text-center'>Ingreso / Egreso</span>
            </button>
          </li>
          <li>
            <button
              className={`customButton bg-colorCustom5 w-[40px] h-[40px] rounded-md flex justify-center items-center text-xl lg:w-[98%] lg:flex-row lg:flex-nowrap lg:justify-start lg:items-center lg:gap-2 lg:pl-5  hover:bg-colorCustom1 transition-all ease-linear duration-300 ${activeIndex === 'ingresoRapido' && activeIndex !== null ? 'bg-colorCustom2' : 'bg-white'}`}
              onClick={() => navigate('/historial/ingresoRapido')}
            >
              <BiSolidTruck />
              <span className='hidden lg:block font-semibold text-lg text-center'>Ingreso rápido</span>
            </button>
          </li>
          <li>
            <button
              className={`customButton bg-colorCustom5 w-[40px] h-[40px] rounded-md flex justify-center items-center text-xl lg:w-[98%] lg:flex-row lg:flex-nowrap lg:justify-start lg:items-center lg:gap-2 lg:pl-5  hover:bg-colorCustom1 transition-all ease-linear duration-300 ${activeIndex === 'historial' && activeIndex !== null ? 'bg-colorCustom2' : 'bg-white'}`}
              onClick={() => navigate('/historial/historia')}
            >
              <BiSolidTimeFive />
              <span className='hidden lg:block font-semibold text-lg text-center'>Historial</span>
            </button>
          </li>
          <li>
            <button
              className={`customButton bg-colorCustom5 w-[40px] h-[40px] rounded-md flex justify-center items-center text-xl lg:w-[98%] lg:flex-row lg:flex-nowrap lg:justify-start lg:items-center lg:gap-2 lg:pl-5  hover:bg-colorCustom1 transition-all ease-linear duration-300 ${activeIndex === 'reportes' && activeIndex !== null ? 'bg-colorCustom2' : 'bg-white'}`}
              onClick={() => navigate('/historial/reportes')}
            >
              <BiSolidReport />
              <span className='hidden lg:block font-semibold text-lg text-center'>Reportes</span>
            </button>
          </li>
        </ul>
        <button
          className='activeNavVerical absolute top-[42%] -right-2 lg:-right-4 esconde w-2 lg:w-4 h-[50px] bg-[#f4f3f3] rounded-r-[3px] grid place-content-center text-md '
          onClick={e => handleClickNavVerticas(e)}
        >
          <BiCaretRight className={`${activeNavVerticas ? 'rotate-180 transition-all ease-in-out duration-300' : 'rotate-0 transition-all ease-in-out duration-300'}`} />
        </button>
      </nav>
    </div>
  )
}

export default VerticalMenu

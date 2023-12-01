import React from 'react'
import { BiHistory, BiUpArrowAlt, BiSolidReport, BiPencil } from 'react-icons/bi'

const Categories = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='tituloGeneral font-titulo font-semibold text-xl text-colorCustom4 text-center'>Categorias</h2>

      <section className='grid gap-7 grid-cols-2 grid-rows-2 place-content-center min-w-[290px]'>
        <section className='catdRedirect w-[125px] h-[125px] bg-colorCustom1 ml-auto rounded-lg flex flex-col justify-between p-2 shadow-[2px_3px_3px_#969696,_-3px_-3px_4px_#ffffff]'>
          <h2 className='font-titulo font-bold text-xl text-colorCustom5 text-center'>Historial</h2>
          <div className='icon w-8 h-8 grid place-content-center text-2xl ml-auto text-colorCustom5'>
            <BiHistory />
          </div>
        </section>

        <section className='catdRedirect w-[125px] h-[125px] bg-colorCustom1 mr-auto rounded-lg flex flex-col justify-between p-2'>
          <h2 className='font-titulo font-bold text-xl text-colorCustom5 text-center'>Historial</h2>
          <div className='icon w-8 h-8 grid place-content-center text-2xl ml-auto text-colorCustom5'>
            <BiPencil />
          </div>
        </section>

        <section className='catdRedirect w-[125px] h-[125px] bg-colorCustom1 ml-auto rounded-lg flex flex-col justify-between p-2'>
          <h2 className='font-titulo font-bold text-xl text-colorCustom5 text-center'>Historial</h2>
          <div className='icon w-8 h-8 grid place-content-center text-2xl ml-auto text-colorCustom5'>
            <BiUpArrowAlt />
          </div>
        </section>

        <section className='catdRedirect w-[125px] h-[125px] bg-colorCustom1 mr-auto rounded-lg flex flex-col justify-between p-2'>
          <h2 className='font-titulo font-bold text-xl text-colorCustom5 text-center'>Historial</h2>
          <div className='icon w-8 h-8 grid place-content-center text-2xl ml-auto text-colorCustom5'>
            <BiSolidReport />
          </div>
        </section>

      </section>
    </div>
  )
}

export default Categories

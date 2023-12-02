import React from 'react'

const Register = () => {
  return (
    <div className='relative bg-colorCustom1 w-[100%] px-6 lg:bg-slate-400 h-screen  p-0 flex flex-col lg:flex-row lg:justify-around gap-8 min-w-[300px]'>
      <div className='lg:flex-col lg:self-center'>
        <div className='pt-9 text-black text-5xl'>
          <h1>Logo</h1>
        </div>
        <div className='pt-6 lg:flex'>
          <p>Nombre de la app</p>
        </div>
      </div>
      <div className='pt-9 lg:self-center'>
        <form action=''>
          <div className='py-5'>
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='text' name='' id='' placeholder='Nombre' /> <br />
          </div>
          <div className='py-5'>
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='text' name='' id='' placeholder='Apelldo' /> <br />
          </div>
          <div className='py-5'>
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='email' name='' id='' placeholder='Email' /> <br />
          </div>
          <input className='rounded lg:w-80 w-full h-[35px]' type='password' name='' id='' placeholder='Contraseña' />
          <input className='rounded lg:w-80 w-full h-[35px]' type='password' name='' id='' placeholder='Confirmar Contraseña' />
        </form>

        <button className='bg-blue border-solid rounded-3xl mt-20 w-full text-xl bg-slate-500 h-[50px]'>Ingresar</button>
        <button className='bg-blue border-solid rounded-3xl mt-10 w-full text-xl bg-slate-500 h-[50px]'>Registrar</button>
      </div>
    </div>
  )
}

export default Register

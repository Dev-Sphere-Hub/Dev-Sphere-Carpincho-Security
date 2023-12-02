import React from 'react'

const LoginForm = () => {
  return (
    <div className='relative bg-colorCustom1 w-[100%] h-screen  p-0 flex flex-col gap-8 min-w-[300px]'>
      <div className='pt-9'>
        <h1>Logo</h1>
      </div>
      <div className='pt-6'>
        <p>Nombre de la app</p>
      </div>
      <div className='pt-9'>
        <form action=''>
          <div className='p-2'>
            <input className='rounded' type='email' name='' id='' placeholder='Email' /> <br />
          </div>
          <input type='password' name='' id='' placeholder='Contraseña' />
        </form>
        <div className='text-sm'>
          <p>Recuperar contraseña</p>
        </div>

        <button className='pt-9 border'>Ingresar</button>
      </div>
    </div>
  )
}

export default LoginForm

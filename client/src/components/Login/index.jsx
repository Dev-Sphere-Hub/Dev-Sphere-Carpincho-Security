import React from 'react'

const LoginForm = () => {
  return (
    <div className='text-lg md:text-xl pt-9 block text-center h-max'>
        <div className='pt-9'>
          <h1>Logo</h1>
        </div>
        <div className='pt-6'>
          <p>Nombre de la app</p>
        </div>
        <div className='pt-9'>
          <form action="">
            <div className='p-2'>

              <input  type="email" name="" id="" placeholder='Email'/> <br/>
            </div>
            <input  type="password" name="" id="" placeholder='Contraseña' />
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
import React from 'react'
import {useNavigate } from 'react-router-dom'

const LoginForm = () => {
  // const [user, setUser] = useState('')
  // const [password, setPassword] = useState(second)
  const Navigate = useNavigate()

  const handleLogin = () => {
    // if (!user === '') toast.error('Usuario invalido')
    // if (user){
    Navigate('/')
  }

  const handleRegister = () => {
    Navigate('/register')
  }

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
            <input className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' type='email' name='' id='' placeholder='Email' /> <br />
          </div>
          <input className='rounded lg:w-80 w-full h-[35px]' type='password' name='' id='' placeholder='Contraseña' />
          <p className='m-[15px] pl-[155px]'>Recuperar contraseña</p>
        </form>

        <button className='bg-blue border-solid rounded-3xl mt-20 w-full text-xl bg-slate-500 h-[50px]' onClick={handleLogin}>Ingresar</button>
        <button className='bg-blue border-solid rounded-3xl mt-10 w-full text-xl bg-slate-500 h-[50px]' onClick={handleRegister}>Registrar</button>
      </div>
    </div>
  )
}

export default LoginForm

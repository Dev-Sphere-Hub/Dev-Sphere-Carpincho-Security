import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/AuthStore/AuthStore'
import { endpoints } from '../../constants/api'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import InputForm from '../../components/InputForm'

const LoginForm = () => {
  const localStorage = window.localStorage
  const { setTokenDesifred, setToken } = useAuthStore()
  const Navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let isValid = true
    let errors = {}

    if (!email) {
      errors.email = 'Por favor, ingresa tu correo electrónico'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Correo electrónico inválido'
      isValid = false
    }

    if (!password) {
      errors.password = 'Por favor, ingresa tu contraseña'
      isValid = false
    } else if (password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres'
      isValid = false
    }

    setErrors(errors)
    return isValid
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleLogin = async (event) => {
    event.preventDefault()
    if (!validateForm()) return

    try {
      const response = await axios.post(endpoints.login, { email, password }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const responseData = response.data

      if (response.status === 200) {
        const decodedToken = jwtDecode(responseData.data.token)
        localStorage.setItem('token', JSON.stringify(decodedToken))
        setToken(responseData.data.token)
        setTokenDesifred(decodedToken)
        Navigate('/historial')
      } else {
        throw new Error(responseData.message)
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleRegister = () => {
    Navigate('/register')
  }

  return (
    <div className='relative bg-colorCustom1 w-[100%] px-6 lg:bg-slate-400 h-screen p-0 flex flex-col lg:flex-row lg:justify-around gap-8 min-w-[300px]'>
      <div className='pt-9 lg:self-center'>
        <form onSubmit={handleLogin}>
          <div className='py-5'>
          <InputForm
  label='Email'
  placeholder='Escribe tu correo electrónico'
  type='email'
  name='email'
  value={email}
  onChange={handleChange}
  errorType={errors?.email}
  errorMessage={errors?.email}
/>
<InputForm
  label='Contraseña'
  placeholder='Ingresa tu contraseña'
  type='password'
  name='password'
  value={password}
  onChange={handleChange}
  errorType={errors?.password}
  errorMessage={errors?.password}
/>
       <p className='m-[15px] pl-[155px]'>Recuperar contraseña</p>

<button
  className='bg-blue border-solid rounded-3xl mt-20 w-full text-xl bg-slate-500 h-[50px]'
  type='submit'
>
  Ingresar
</button>
<button
  className='bg-blue border-solid rounded-3xl mt-10 w-full text-xl bg-slate-500 h-[50px]'
  onClick={handleRegister}
>
  Registrar
</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
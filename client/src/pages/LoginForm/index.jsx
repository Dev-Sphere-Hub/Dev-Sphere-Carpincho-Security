import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../store/AuthStore/AuthStore';
import { endpoints } from '../../constants/api';
import { jwtDecode } from 'jwt-decode';

const LoginForm = () => {
  const localStorage = window.localStorage;
  const { setTokenDesifred, setToken } = useAuthStore();
  const Navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await fetch(endpoints.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await res.json();
      
      if (res.status === 200) {
        const decodedToken = jwtDecode(responseData.data.token);
        localStorage.setItem('token', JSON.stringify(decodedToken));
        setToken(responseData.data.token);
        setTokenDesifred(decodedToken);
        Navigate('/historial');
      } else {
        throw new Error(responseData.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRegister = () => {
    Navigate('/register');
  };

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
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='py-5'>
            <input 
              className='rounded lg:w-80 w-full h-[35px] lg:h-[40px]' 
              type='email' 
              name='email' 
              placeholder='Email' 
              {...register('email', { required: 'Este campo es requerido' })}
            /> <br />
            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
          </div>
          <input 
            className='rounded lg:w-80 w-full h-[35px]' 
            type='password' 
            name='password' 
            placeholder='Contraseña' 
            {...register('password', { required: 'Este campo es requerido' })}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
          <p className='m-[15px] pl-[155px]'>Recuperar contraseña</p>

          <button className='bg-blue border-solid rounded-3xl mt-20 w-full text-xl bg-slate-500 h-[50px]' type='submit'>Ingresar</button>
          <button className='bg-blue border-solid rounded-3xl mt-10 w-full text-xl bg-slate-500 h-[50px]' onClick={handleRegister}>Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

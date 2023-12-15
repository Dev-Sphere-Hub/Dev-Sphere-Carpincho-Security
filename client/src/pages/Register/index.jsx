import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { endpoints } from '../../constants/api';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      const payload = {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        phone: data.phone,
        documentId: data.documentId,
      };

      const response = await fetch(endpoints.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error al registrar: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      const token = responseData.data.token;
      console.log(token);

      navigate('/login');
    } catch (error) {
      console.error('Error al registrarse:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-colorCustom1 w-[100%] px-6 lg:bg-slate-400 h-screen flex flex-col lg:flex-row lg:justify-around min-w-[300px]'>
      <div className='lg:flex-col lg:self-center'>
        <div className='pt-9 text-black text-5xl'>
          <h1>Logo</h1>
        </div>
        <div className='pt-6 lg:flex'>
          <p>Nombre de la app</p>
        </div>
      </div>
      <div className=''>
        <form className='w-full px-[10%]' onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              label='Nombre'
              placeholder='Escribe tu nombre'
              type='text'
              register={register('name', {
                required: 'Por favor, ingresa tu nombre',
              })}
              errorType={errors.name}
              errorMessage={errors.name?.message}
            />
            <InputForm
              label='Apellido'
              placeholder='Escribe tu apellido'
              type='text'
              register={register('lastname', {
                required: 'Por favor, ingresa tu apellido',
              })}
              errorType={errors.lastname}
              errorMessage={errors.lastname?.message}
            />
            <InputForm
              label='Dni'
              placeholder='Escribe tu DNI'
              type='text'
              register={register('documentId', {
                required: 'Por favor, ingresa tu DNI',
              })}
              errorType={errors.documentId}
              errorMessage={errors.documentId?.message}
            />
            <InputForm
              label='Email'
              placeholder='Escribe tu correo electrónico'
              type='email'
              register={register('email', {
                required: 'Por favor, ingresa tu correo electrónico',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Correo electrónico inválido',
                },
              })}
              errorType={errors.email}
              errorMessage={errors.email?.message}
            />
            <InputForm
              label='Phone'
              placeholder='Escribe tu número de teléfono'
              type='text'
              register={register('phone', {
                required: 'Por favor, ingresa tu número de teléfono',
              })}
              errorType={errors.phone}
              errorMessage={errors.phone?.message}
            />

            <InputForm
              label='Contraseña'
              placeholder='Ingresa tu contraseña'
              type='password'
              register={register('password', {
                required: 'Por favor, ingresa tu contraseña',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres',
                },
              })}
              errorType={errors.password}
              errorMessage={errors.password?.message}
            />
            <InputForm
              label='Confirmar Contraseña'
              placeholder='Confirma tu contraseña'
              type='password'
              register={register('confirmPassword', {
                required: 'Confirma tu contraseña',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres',
                },
                validate: (value) =>
                  value === getValues('password') ||
                  'Las contraseñas no coinciden',
              })}
              errorType={errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message}
            />
          <Button
            type='submit'
            text={isLoading ? 'Cargando...' : 'Registrar'}
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;

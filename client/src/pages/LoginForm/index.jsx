import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/AuthStore/AuthStore";
import { endpoints } from "../../constants/api";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import InputForm from "../../components/InputForm";

const LoginForm = () => {
  const localStorage = window.localStorage;
  const { setTokenDesifred, setToken } = useAuthStore();
  const Navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(endpoints.login, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });


        localStorage.setItem('token', JSON.stringify(decodedToken))
        setToken(data.data.token)
        setTokenDesifred(decodedToken)
        Navigate('/historial/reportes')
      }
      if (data.status !== 'success') {
        throw new Error(data.message)

      const responseData = response.data;

      if (response.status === 200) {
        const decodedToken = jwtDecode(responseData.data.token);
        localStorage.setItem("token", JSON.stringify(decodedToken));
        setToken(responseData.data.token);
        setTokenDesifred(decodedToken);
        Navigate("/historial");
      } else {
        throw new Error(responseData.message);

      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRegister = () => {
    Navigate("/register");
  };

  return (
    <div className="relative bg-colorCustom1 w-[100%] px-6 lg:bg-slate-400 h-screen p-0 flex flex-col lg:flex-row lg:justify-around gap-8 min-w-[300px]">
      <div className="pt-9 lg:self-center">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="py-5">
            <InputForm
              label="Email"
              placeholder="Escribe tu correo electrónico"
              type="email"
              register={register("email", {
                required: "Por favor, ingresa tu correo electrónico",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Correo electrónico inválido"
                },
              })}
              errorType={errors?.email}
              errorMessage={errors?.email?.message}
            />
          </div>
          <InputForm
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
            register={register("password", {
              required: "Por favor, ingresa tu contraseña",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$*_\-/+])[A-Za-z\d@#$*_\-/+]{8,}$/,
                message:
                  "La contraseña debe incluir al menos 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial (@#$*_-/+)",
              },
            })}
            errorType={errors?.password}
            errorMessage={errors?.password?.message}
          />
          <p className="m-[15px] pl-[155px]">Recuperar contraseña</p>

          <button
            className="bg-blue border-solid rounded-3xl mt-20 w-full text-xl bg-slate-500 h-[50px]"
            type="submit"
          >
            Ingresar
          </button>
          <button
            className="bg-blue border-solid rounded-3xl mt-10 w-full text-xl bg-slate-500 h-[50px]"
            onClick={handleRegister}
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

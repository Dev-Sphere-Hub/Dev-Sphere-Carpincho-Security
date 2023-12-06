import { useLocation } from 'react-router-dom'

const SuccessfulRegistration = () => {
  const location = useLocation()
  const { form } = location.state

  return (
    <div>
      <h1>El ingreso ha sido validado con éxito.
      </h1>
      {/* aqui el icono de exito */}
      <h2>
        <b> {`${form.nombre} `}</b>
        ingresando al establecimiento horario 13:45 AM
      </h2>
    </div>
  )
}

export default SuccessfulRegistration

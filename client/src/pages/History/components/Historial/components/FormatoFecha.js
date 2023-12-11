const formatoFecha = (fechaStr) => {
  const fecha = new Date(fechaStr)

  const dia = fecha.getDate().toString().padStart(2, '0')
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0')
  const año = fecha.getFullYear()

  const horas = fecha.getHours().toString().padStart(2, '0')
  const minutos = fecha.getMinutes().toString().padStart(2, '0')

  return `${dia}/${mes}/${año} ${horas}:${minutos}hs`
}

export default formatoFecha

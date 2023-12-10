const api = import.meta.env.VITE_API_URL
export const endpoints = {
  acceso: `${api}/auth`,
  usuarios: `${api}/users`,
  paquetes: `${api}/packages`,
  vehiculos: `${api}/vehicles`,
  visitas: `${api}/visits`,
  nuevos: `${api}/news`
}

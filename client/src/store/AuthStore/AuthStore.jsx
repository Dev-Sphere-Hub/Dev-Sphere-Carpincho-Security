import { create } from 'zustand'
import { endpoints } from '../../constants/api'
import axios from 'axios'

export const useAuthStore = create(set => ({
  token: null,
  tokenDesifred: null,
  user: null,
  setToken: (newToken) => set({ token: newToken }),
  setTokenDesifred: (newToken) => set({ tokenDesifred: newToken }),
  updateUser: async (updatedFields, token, user) => {
    try {
      // Realiza una solicitud PATCH al backend para actualizar el usuario
      const response = await axios.patch(endpoints.patchUser, updatedFields, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('response updateUser --> ', response)
      // Actualiza el estado del usuario en el store con los nuevos datos
      set({ user: { ...user, ...response.data.data } })
    } catch (error) {
      console.error('Error al actualizar el usuario:', error)
    }
  },
  fetchUserData: async (token) => {
    try {
      const response = await axios.get(endpoints.getUser, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('response fetchUserData --> ', response.data)
      set({ user: response.data.data })
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error)
    }
  }
}))

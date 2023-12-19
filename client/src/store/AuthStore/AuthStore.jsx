import { endpoints } from '../../constants/api'
import axios from 'axios'
import { create } from 'zustand'
import { persist } from 'zustand/middleware' // No olvides importar persist

export const useAuthStore = create(persist((set) => ({
  token: null,
  user: null,
  tokenDesifred: null,
  loading: false,

  setToken: (newToken) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('token', newToken)
    }
    set({ token: newToken })
  },
  setTokenDesifred: (newToken) => set({ tokenDesifred: newToken }),

  updateUser: async (updatedFields, token, user) => {
    try {
      const userId = user._id

      if (!userId) {
        throw new Error('El ID del usuario no está definido')
      }

      const response = await axios.patch(`${endpoints.patchUser}/${userId}`, updatedFields, {
        headers: {

          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

      set({ user: { ...user, ...response.data.data } })
    } catch (error) {
      console.error('Error al actualizar el usuario:', error)
    }
  },
  fetchUserData: async (token) => {
    set({ loading: true })
    try {
      const response = await axios.get(endpoints.getUser, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('response fetchUserData --> ', response.data)
      set({ user: response.data.data })
      set({ loading: false })
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error)
    }
  }
}), {
  name: 'authStore'
}))

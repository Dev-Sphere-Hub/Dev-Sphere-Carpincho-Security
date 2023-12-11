import { create } from 'zustand'

export const useAuthStore = create(set => ({
  token: null,
  setToken: (newToken) => set({ token: newToken })
}))

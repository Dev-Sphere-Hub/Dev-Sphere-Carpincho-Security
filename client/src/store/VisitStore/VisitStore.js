import { create } from 'zustand'
import { endpoints } from '../../constants/api'
import axios from 'axios'

const useVisitStore = create((set) => ({
  visitas: [],
  update: false,
  newVisite: null,
  // actualizamosla visitas
  setUpdate: (update) => set({ update }),
  setVisitas: (nuevaVisita) => set({ visitas: nuevaVisita }),
  setNewVisite: (newVisite) => set({ newVisite }),
  subirVicita: async (token, updateVisita) => {
    try {
      const response = await axios.post(`${endpoints.visitas}/`, updateVisita, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      set({ update: true })
      set({ newVisite: response.data })
    } catch (error) {
      console.error('Error al subir la visita:', error)
    }
  }

}))

export default useVisitStore

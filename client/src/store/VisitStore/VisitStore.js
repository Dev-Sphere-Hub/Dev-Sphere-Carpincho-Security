import { create } from 'zustand'

const useVicitStore = create((set) => ({
  visitas: [],

  // actualizamosla vicitas
  setVisitas: (nuevaVisita) => set({ visitas: nuevaVisita })
}))

export default useVicitStore

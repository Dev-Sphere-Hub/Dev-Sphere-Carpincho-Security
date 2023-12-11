import { create } from 'zustand'

const useVisitStore = create((set) => ({
  visitas: [],

  // actualizamosla visitas
  setVisitas: (nuevaVisita) => set({ visitas: nuevaVisita })
}))

export default useVisitStore

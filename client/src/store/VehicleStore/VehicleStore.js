import { create } from 'zustand'

const useVehicleStore = create((set) => ({
  vehicles: [],

  // actualizamosla vicitas
  setVehicles: (nuevoVehiculo) => set({ vehicles: nuevoVehiculo })
}))

export default useVehicleStore

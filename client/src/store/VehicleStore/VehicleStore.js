import axios from 'axios'
import { create } from 'zustand'
import { endpoints } from '../../constants/api'

const useVehicleStore = create((set) => ({
  vehicles: [],
  message: null,
  badmessage: null,
  postVehicles: false,
  // actualizamosla vicitas
  setVehicles: (nuevoVehiculo) => set({ vehicles: nuevoVehiculo }),
  updateVehicles: async (updateVehicles, token) => {
    try {
      const response = await axios.post(`${endpoints.vehiculos}/`, updateVehicles, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      console.log('response vehicles ->', response)
      set({ message: response?.response?.data?.message })
      set({ postVehicles: true })
    } catch (error) {
      console.log(error)
      set({ badmessage: error.message })
    }
  }
}))

export default useVehicleStore

import { create } from 'zustand'

const usePhotoCaptureStore = create((set) => ({
  isActive: true,
  editPhoto: false,
  captureImage: null,
  setEditPhoto: (editPhoto) => set({ editPhoto }),
  setIsActive: (isActive) => set({ isActive }),
  setCaptureImage: (image) => set({ captureImage: image })
}))

export default usePhotoCaptureStore

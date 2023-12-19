import { create } from 'zustand'

const useImageStore = create(set => ({
  capturedImage: null,
  setCapturedImage: (image) => set(() => ({ capturedImage: image }))
}))

export default useImageStore

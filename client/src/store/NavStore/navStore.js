import { create } from 'zustand'

const useNavStore = create((set) => ({
  activeIndex: null,

  setActiveIndex: (index) => set({ activeIndex: index })
}))

export default useNavStore

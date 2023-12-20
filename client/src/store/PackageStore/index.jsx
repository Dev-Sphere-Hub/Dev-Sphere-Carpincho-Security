import { create } from 'zustand'

const PackageStore = create((set) => ({
  activeIndex: null,

  setActiveIndex: (index) => set({ activeIndex: index })
}))

export default PackageStore

import { create } from 'zustand';

interface LayoutStore {
  isSidebarOpen: boolean;
  isContentsOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
  openContents: () => void;
  closeContents: () => void;
  toggleContents: () => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  isSidebarOpen: false,
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  isContentsOpen: false,
  openContents: () => set({ isContentsOpen: true }),
  closeContents: () => set({ isContentsOpen: false }),
  toggleContents: () =>
    set((state) => ({ isContentsOpen: !state.isContentsOpen })),
}));

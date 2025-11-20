import { create } from 'zustand';

interface LayoutStore {
  isSidebarOpen: boolean;
  isContentsOpen: boolean;
  isCmdkOpen: boolean;
  openCmdk: () => void;
  closeCmdk: () => void;
  toggleCmdk: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
  openContents: () => void;
  closeContents: () => void;
  toggleContents: () => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  isSidebarOpen: false,
  openSidebar: () => set({ isSidebarOpen: true, isContentsOpen: false }),
  closeSidebar: () => set({ isSidebarOpen: false, isContentsOpen: false }),
  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
      isContentsOpen: false,
    })),
  isContentsOpen: false,
  openContents: () => set({ isContentsOpen: true, isSidebarOpen: false }),
  closeContents: () => set({ isContentsOpen: false, isSidebarOpen: false }),
  toggleContents: () =>
    set((state) => ({
      isContentsOpen: !state.isContentsOpen,
      isSidebarOpen: false,
    })),
  isCmdkOpen: false,
  openCmdk: () => set({ isCmdkOpen: true, isSidebarOpen: false }),
  closeCmdk: () => set({ isCmdkOpen: false, isSidebarOpen: false }),
  toggleCmdk: () =>
    set((state) => ({
      isCmdkOpen: !state.isCmdkOpen,
      isSidebarOpen: false,
    })),
}));

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type TabsStore = {
  activeTab: Record<string, string>;
  setActiveTab: (tabKey: string, tabValue: string) => void;
};

export const useTabsStore = create<TabsStore>()(
  persist(
    (set) => ({
      activeTab: {},
      setActiveTab: (tabKey: string, tabValue: string) =>
        set((state) => ({
          activeTab: { ...state.activeTab, [tabKey]: tabValue },
        })),
    }),
    {
      name: 'tabs-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

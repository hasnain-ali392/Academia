import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AssetType = 'PDF' | 'DOCX' | 'XLSX' | 'PPTX' | 'IMAGE';

export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  size: number;
  url: string;
  processed?: boolean;
}

export interface Project {
  id: string;
  title: string;
  assets: Asset[];
  workflow: string[]; // Order of asset IDs
  result?: string;
  createdAt: number;
}

interface AppState {
  // Global UI
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;

  // Workspace
  currentProject: Project | null;
  setCurrentProject: (project: Project | null) => void;
  updateWorkflow: (assetIds: string[]) => void;
  
  // History
  projects: Project[];
  addProject: (project: Project) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isSidebarOpen: true,
      setSidebarOpen: (open) => set({ isSidebarOpen: open }),

      currentProject: null,
      setCurrentProject: (project) => set({ currentProject: project }),
      updateWorkflow: (assetIds) => set((state) => ({
        currentProject: state.currentProject ? { ...state.currentProject, workflow: assetIds } : null
      })),

      projects: [],
      addProject: (project) => set((state) => ({ 
        projects: [project, ...state.projects].slice(0, 50) 
      })),
    }),
    {
      name: 'academia-storage',
      partialize: (state) => ({ projects: state.projects }),
    }
  )
);

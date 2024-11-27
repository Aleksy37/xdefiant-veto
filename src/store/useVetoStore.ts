import { create } from 'zustand'
import { LobbyData, User } from "@/types"

interface VetoState {
  // User state
  currentUser: User | null;
  
  // UI state
  isSettingsModalOpen: boolean;
  selectedMap: string | null;
  
  // Game state
  lobbyData: LobbyData | null;
  
  // Actions
  setCurrentUser: (user: User | null) => void;
  setSettingsModalOpen: (isOpen: boolean) => void;
  setSelectedMap: (map: string | null) => void;
  updateLobbyData: (data: LobbyData) => void;
}

export const useVetoStore = create<VetoState>((set) => ({
  // Initial state
  currentUser: null,
  isSettingsModalOpen: false,
  selectedMap: null,
  lobbyData: null,
  
  // Actions
  setCurrentUser: (user) => set({ currentUser: user }),
  setSettingsModalOpen: (isOpen) => set({ isSettingsModalOpen: isOpen }),
  setSelectedMap: (map) => set({ selectedMap: map }),
  updateLobbyData: (data) => set({ lobbyData: data })
}))
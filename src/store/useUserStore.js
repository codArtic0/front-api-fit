import { create } from 'zustand';
import { getUser } from '../services/api';

export const useUserStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,

  fetchUser: async () => {
    set({ isLoading: true, error: null });
    try {
        const userid = localStorage.getItem("userId")
      const userData = await getUser(userid);
      set({ user: userData, isLoading: false });
    } catch (err) {
      set({ 
        error: err.response?.data?.error || "Erro ao carregar usuário", 
        isLoading: false 
      });
    }
  },

  clearUser: () => set({ user: null })
}));
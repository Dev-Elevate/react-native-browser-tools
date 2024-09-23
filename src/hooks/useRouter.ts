import { create } from 'zustand';

const useNavigationStore = create((set) => ({
  history: ['/'],
  currentIndex: 0,
  currentRoute: '/',

  navigate: (route: any) =>
    set((state: { history: string | any[]; currentIndex: number }) => {
      const newHistory = state.history.slice(0, state.currentIndex + 1);
      newHistory.push(route);
      return {
        history: newHistory,
        currentIndex: newHistory.length - 1,
        currentRoute: route,
      };
    }),

  goBack: () =>
    set((state: { currentIndex: number; history: any[] }) => {
      if (state.currentIndex > 0) {
        const newIndex = state.currentIndex - 1;
        return {
          currentIndex: newIndex,
          currentRoute: state.history[newIndex],
        };
      }
      return state;
    }),

  goForward: () =>
    set((state: { currentIndex: number; history: string | any[] }) => {
      if (state.currentIndex < state.history.length - 1) {
        const newIndex = state.currentIndex + 1;
        return {
          currentIndex: newIndex,
          currentRoute: state.history[newIndex],
        };
      }
      return state;
    }),
}));

export const useBrowserNavigation = () => {
  const { currentRoute, navigate, goBack, goForward } = useNavigationStore();

  return {
    currentRoute,
    navigate,
    goBack,
    goForward,
  };
};

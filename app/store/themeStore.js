import create from 'zustand';

const initialState = {
  merchantName: '',
  merchantLogo: '',
  theme: {
    background: 'hsl(20, 14.3%, 4.1%)',
    foreground: 'hsl(0, 0%, 95%)',
    primary: 'hsl(346.8, 77.2%, 49.8%)',
    primaryForeground: 'hsl(355.7, 100%, 97.3%)',
  },
};

export const useThemeStore = create((set) => ({
  ...initialState,
  setTheme: (data) => set((state) => ({
    ...state,
    merchantName: data.merchantName,
    merchantLogo: data.merchantLogo,
    theme: data.theme,
  })),
}));

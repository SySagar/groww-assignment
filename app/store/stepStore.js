import create from 'zustand';

export const useStepStore = create((set) => ({
  step : 1,
  setNextStep : (stepNo) => set({step: stepNo}),
}));

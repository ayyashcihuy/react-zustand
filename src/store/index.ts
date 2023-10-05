import { create } from "zustand";

interface BearState {
    bearsPopulation: number;
    increase: (by: number) => void;
    decrease: (by: number) => void;
}

export const bearStore = create<BearState>()((set) => ({
    bearsPopulation: 0,
    increase: (by) => set((state) => ({ bearsPopulation: state.bearsPopulation + by})),
    decrease: (by) => set((state) => ({ bearsPopulation: state.bearsPopulation - by}))
}))
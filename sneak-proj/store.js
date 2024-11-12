import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
    // Modal state
    isModalOpen: false,
    setIsModalOpen: (value) => set({ isModalOpen: value }),

    // Authentication state
    isLoggedIn: false, // Default value for login status
    login: () => set({ isLoggedIn: true }), // Set login status to true
    logout: () => set({ isLoggedIn: false }), // Set login status to false

    // Other state variables
    sneakers: [],
    selectedSneaker: null,
    setSelectedSneaker: (sneaker) => set({ selectedSneaker: sneaker }),

    loading: true,
    error: null,
    isBuying: false,
    setIsBuying: (status) => set({ isBuying: status }),

    setSneakers: (data) => set({ sneakers: data, loading: false }),
    setError: (message) => set({ error: message, loading: false }),

    mainImg: '',
    setMainImg: (img) => set({ mainImg: img }),

    cartItems: [],
    addToCart: (sneaker) => set((state) => ({
        cartItems: [...state.cartItems, sneaker],
    })),
    removeFromCart: (id) => set((state) => ({
        cartItems: state.cartItems.filter(item => item.id !== id),
    })),
    resetSelectedSneaker: () => set({ selectedSneaker: null }),
});

const log = (config) => (set,get,api) => config(
    (...args) => {
        console.log(args);
        set(...args);
    },
    get,  
    api,
);

export const useStore = create(log(persist(devtools(store), {name: "store"})));
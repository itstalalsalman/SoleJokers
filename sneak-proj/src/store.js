import axios from "axios";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set, get) => ({
    //object loading states
    isObjectLoaded: false,
    setIsObjectLoaded: (value) => set({isObjectLoaded: value}),

    // Modal state
    isModalOpen: false,
    setIsModalOpen: (value) => set({ isModalOpen: value }),

    // Authentication state
    isLoggedIn: false, // Default value for login status
    login: () => set({ isLoggedIn: true }), // Set login status to true
    logout: () => set({ isLoggedIn: false }), // Set login status to false

    //Showing Logged In Avatar hover states
    isMouseOnAvatar: false,
    setIsMouseOnAvatar: (value) => set({ isMouseOnAvatar: value }),

    //Showing cart icon hover states
    isMouseOnCart: false,
    setIsMouseOnCart: (value) => set({ isMouseOnCart: value }),

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

    //Filter functionality
    selectedBrands: [],
    priceRange: { min: '', max: '' },

    setSelectedBrands: (brands) => set({ selectedBrands: brands }),
    setPriceRange: (range) => set({ priceRange: range }),

    //fetching all sneaker
    fetchAllSneakers: async () => {
        try {
            set({ loading: true });

            // Fetch all sneakers from the API
            const response = await axios.get('http://localhost:5000/api/shoes');

            // Update the sneakers state with the fetched data
            set({ sneakers: response.data, loading: false });
        } catch (error) {
            console.error('Error fetching sneakers:', error);
            set({ error: 'Failed to load sneakers', loading: false });
        }
    },

    // Fetching filtered sneakers based on the current filter state
    fetchFilteredSneakers: async () => {
        try {
            set({ loading: true });
            const { selectedBrands, priceRange } = get();
            const params = {};
            if (selectedBrands.length > 0) params.brands = selectedBrands;
            if (priceRange.min) params.minPrice = priceRange.min;
            if (priceRange.max) params.maxPrice = priceRange.max;
        
            const response = await axios.get('http://localhost:5000/api/shoes/showFilter', { params });
            set({ sneakers: response.data, loading: false });
            } catch (error) {
            console.error('Error fetching sneakers:', error);
            set({ error: 'Failed to load sneakers', loading: true });
            }
      },

    resetFilters: () => {
        set({ selectedBrands: [], priceRange: { min: '', max: '' } })
    
    },


});

const log = (config) => (set,get,api) => config(
    (...args) => {
        console.log(args);
        set(...args);
    },
    get,  
    api,
);

export const useStore = create(store);

// export const useStore = create(log(persist(devtools(store), {name: "store"})));
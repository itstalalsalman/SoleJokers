import axios from "axios";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set, get) => ({
    email: '',
    setEmail: (value) => set({email: value}),
    //object loading states
    isObjectLoaded: false,
    setIsObjectLoaded: (value) => set({isObjectLoaded: value}),

    // Modal state
    isModalOpen: false,
    setIsModalOpen: (value) => set({ isModalOpen: value }),

    // Authentication state
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false, // Default value for login status
    hasEnteredInfo: false,
    setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken, isLoggedIn: true, hasEnteredInfo: true }),
    clearTokens: () => set({ accessToken: null, refreshToken: null, isLoggedIn: false, hasEnteredInfo: false }),
    login: async (email, password) => {
        try {
          const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
          console.log(data)
          set({ accessToken: data.accessToken, refreshToken: data.refreshToken, isLoggedIn: true, hasEnteredInfo: data.hasEnteredInfo });
          localStorage.setItem('refreshToken', data.refreshToken);
        } catch (err) {
          console.error(err);
        }
    },
    refreshAccessToken: async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) return;
    
        try {
          const { data } = await axios.post('http://localhost:5000/api/auth/refresh', { refreshToken });
          set({ accessToken: data.accessToken });
        } catch (err) {
          console.error('Error refreshing access token', err);
        }
    },
    
    register: async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Registration error:', error.response?.data.message || error.message);
        }
    },

    logout: async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        try {
          await axios.post('http://localhost:5000/api/auth/logout', { refreshToken });
          set({ accessToken: null, refreshToken: null, isLoggedIn: false });
          localStorage.removeItem('refreshToken');

        } catch (err) {
          console.error('Error during logout', err);
        }
    },

    verify: async (email, verificationCode) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/verify', {
                email,
                code: verificationCode,
            });
            console.log('Verification successful:', response.data);
        } catch (error) {
            console.error('Verification error:', error.response?.data.message || error.message);
        }
    },
    
    initializeAuth: async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          await useStore.getState().refreshAccessToken();
          set({ isLoggedIn: true, hasEnteredInfo: true });
        }
    },

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
    isAllSneaker: false,
    setFetchAllSneakers: (value) => set({isAllSneaker: value}),
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

    hasEnteredInfo: false, // Boolean indicating if user info is entered
    userInfo: null, // Object to store user information

    // Action to set the hasEnteredInfo flag
    setHasEnteredInfo: (status) => set({ hasEnteredInfo: status }),


    fetchUserInfo: async () => {
        try {
            const { accessToken } = get();   
            const response = await axios.get('http://localhost:5000/api/user/getUserInfo', {headers: {Authorization: `Bearer ${accessToken}`}}); // Replace with your API endpoint
            set({ userInfo: response.data, hasEnteredInfo: true });
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    },
    
    // Action to save user information to the backend (first-time submission)
    saveUserInfo: async (newInfo) => {
        try {
          const { accessToken } = get();   
          await axios.post('http://localhost:5000/api/user/setUserInfo', newInfo, {headers: {Authorization: `Bearer ${accessToken}`}}); // Replace with your API endpoint
          set({ userInfo: newInfo, hasEnteredInfo: true });
        } catch (error) {
          console.error('Error saving user info:', error);
      }
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
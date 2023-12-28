import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites'

export const store = configureStore({
    // slices of state(data) and actions that can change those slices(data) to create what the store
    reducer: {
        favoriteMeals: favoritesReducer
    }
})
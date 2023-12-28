import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        // automatically gives last snapshot of state when redux call this method
        // takes a second parameter that can take a payload (similary to req.body)
        addFavorite: (state, action) => {
            state.ids.push(action.payload.mealId);
        },

        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.mealId), 1)
        }
    }
})

// we need to separately export the reducer methods so we can use them in different parts of our app
// these two point to the methods above. ('actions' property is given to us by Redux)
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

// we export .reducer so we can later merge it with our store's reducer
export default favoritesSlice.reducer



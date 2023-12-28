import { createContext, useState } from "react";


// You don't need to add initial context values, 
// but it helps with autocompletion
export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})


// function component so we can use this context as a wrapper 
// we can also add all the context logic in the component
function FavoritesContextProvider({ children }) {
    // Context Logic
    const [mealIds, setMealIds] = useState([]);

    function addFavorite(id) {
        setMealIds((currentIds) => [...currentIds, id])
    }

    function removeFavorite(id) {
        setMealIds((currentIds) => currentIds.filter(mealId => mealId !== id))
    }

    const value = {
        ids: mealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )

}

export default FavoritesContextProvider
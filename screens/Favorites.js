import { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from 'react-redux';

function Favorites() {
    // const { ids } = useContext(FavoritesContext)
    // const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id))

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id))

    return (
        <>
            {
                favoriteMeals.length ?
                    <MealList items={favoriteMeals} />
                    :
                    <View style={styles.rootContainer}>
                        <Text style={styles.noFavoriteText}>No favorite meals yet.</Text>
                    </View>
            }
        </>
    )
}

export default Favorites;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noFavoriteText: {
        fontSize: 24,
        color: 'white',
        marginTop: 20
    }
})
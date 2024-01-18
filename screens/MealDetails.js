import { Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useEffect, useLayoutEffect, useContext } from "react";
import MealsCardDetails from "../components/MealsCardDetails";
import HeaderIcon from "../components/HeaderIcon";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector, useDispatch } from 'react-redux';
// import the methods to call from the store
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetails({ route, navigation }) {
    const mealId = route.params.mealId
    // useSelect hook to grab redux state and dig into difference slices for their data
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    // set up dispatch to dispatch actions
    const dispatch = useDispatch();

    // const favoriteMealsCtx = useContext(FavoritesContext)
    // we can check the context store to see if it is already favorited
    const mealIsFavorited = favoriteMealIds.includes(mealId)

    const {
        title,
        imageUrl,
        ingredients,
        steps,
        duration,
        affordability,
        complexity,
    } = MEALS.find((meal) => meal.id === mealId)

    useEffect(() => {
        navigation.setOptions({
            title
        })
    }, [title, navigation])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => 
            <HeaderIcon 
                onPress={headerBtnPressHandler}
                icon={mealIsFavorited ? 'star' : 'star-outline'}
                size={24}
                color={'white'}
            />
        })
    }, [navigation, headerBtnPressHandler])

    function headerBtnPressHandler() {
        if (mealIsFavorited) {
            // favoriteMealsCtx.removeFavorite(mealId)
            dispatch(removeFavorite({ mealId }))
        } else {
            // favoriteMealsCtx.addFavorite(mealId)
            dispatch(addFavorite({ mealId }))
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <MealsCardDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                        title={title}
                        imageUrl={imageUrl}
                    />
                </View>
                <Text style={styles.titleText}>Ingredients</Text>
                <View style={styles.list}>
                    {ingredients.map((ingredient, index) => {
                        return (
                            <Text style={styles.detailsText} key={index}>{ingredient}</Text>
                        )
                    })}
                </View>
                <Text style={styles.titleText}>Directions</Text>
                <View style={[styles.list, styles.directionList]}>
                    {steps.map((ingredient, index) => {
                        return (
                            <Text style={styles.detailsText} key={index}>{index + 1}. {ingredient}</Text>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        margin: 16
    },
    list: {
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 16
    },
    directionList: {
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 32
    },
    titleText: {
        fontSize: 24,
        color: '#da8585',
        textDecorationLine: 'underline',
        marginBottom: 5,
        textAlign: 'center',
        letterSpacing: 2
    },
    detailsText: {
        color: 'white',
        marginBottom: 12,
    }
})
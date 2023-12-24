import { Text, View, Image, FlatList, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useEffect } from "react";
import MealsCardDetails from "../components/MealsCardDetails";

function MealDetails({ route, navigation }) {

    const mealId = route.params.mealId
    const {
        title,
        imageUrl,
        ingredients,
        steps,
        duration,
        affordability,
        complexity,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    } = MEALS.find((meal) => meal.id === mealId)

    useEffect(() => {
        navigation.setOptions({
            title
        })
    }, [title, navigation])

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
        alignItems: 'flex-start'
    },
    titleText: {
        fontSize: 24,
        color: 'white',
        textDecorationLine: 'underline',
        marginBottom: 5,
        textAlign: 'center'
    },
    detailsText: {
        color: 'white',
        marginBottom: 5,
    }
})
import { Text, View, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import MealItem from "../components/Mealtem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

// like navigation, route is another prop given to registered screens via react navigation
// you can use a hook for both navigation and route parameter in case you are in a screen that is not registered
function MealsOverview({ route, navigation }) {
    const categoryId = route.params.categoryId
    const [mealData, setMealData] = useState([])

    useEffect(() => {
        setMealData(MEALS.filter(meal => meal.categoryIds.includes(categoryId)))
    }, [categoryId])

    // render this before the component renders (or simultaneously)
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title
        // this is an alternative to setting options in the Screen in App.js
        navigation.setOptions({
            title: categoryTitle
        })
    }, [categoryId, navigation])


    //  CallBack function to render each item 
    function renderMealItem({ item }) {
        const mealItemOptions = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return (
            <MealItem {...mealItemOptions} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={mealData}
                renderItem={renderMealItem}
                keyExtractor={item => item.id}
                style={styles.mealList}
            />
        </View>
    )
}

export default MealsOverview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mealList: {
        flex: 1,
        margin: 16
      
    }
})
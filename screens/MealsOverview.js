import { Text, View, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import MealItem from "../components/Mealtem";
import { MEALS } from "../data/dummy-data";

// like navigation, route is another prop given to registered screens via react navigation
// you can use a hook for both navigation and route parameter in case you are in a screen that is not registered
function MealsOverview({ route }) {
    const categoryId = route.params.categoryId
    const [mealData, setMealData] = useState([])
    
    useEffect(() => {
        setMealData(MEALS.filter(meal => meal.categoryIds.includes(categoryId)))
    }, [categoryId])

    function renderMealItem({ item }) {
        return (
            <MealItem meal={item} />
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
            <Text>Meals Overview</Text>
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
        width: '100%'
    }
})
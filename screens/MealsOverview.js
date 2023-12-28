import { useLayoutEffect, useState, useEffect } from "react";
import MealList from "../components/MealList";
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

    return (
        <MealList items={mealData} />
    )


}

export default MealsOverview;
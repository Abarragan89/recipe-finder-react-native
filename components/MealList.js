import { View, FlatList, StyleSheet } from "react-native";
import MealItem from './Mealtem'

function MealList({ items }) {

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
                data={items}
                renderItem={renderMealItem}
                keyExtractor={item => item.id}
                style={styles.mealList}
            />
        </View>
    )
}
export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mealList: {
        flex: 1,
        margin: 16
      
    }
})
import { View, ScrollView, StyleSheet } from "react-native"
import CategorySquare from "../components/CategorySquare";
import { CATEGORIES } from "../data/dummy-data";

// navigaiton prop comes from react navigation since this screen is registered
function HomePage({ navigation }) {

    function categoryPressHandler(categoryId) {
      navigation.navigate('MealsOverview', {
        categoryId,
      })
    }

    return (
        <ScrollView>
          <View style={styles.categoriesContainer}>
            {CATEGORIES.map((category) => (
              <CategorySquare
                key={category.id}
                color={category.color}
                onPress={categoryPressHandler.bind(this, category.id)}
              >
                {category.title}
              </CategorySquare>
            ))}
          </View>
        </ScrollView>
      );
};

export default HomePage;

const styles = StyleSheet.create({
    categoriesContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

})
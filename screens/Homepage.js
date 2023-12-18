import { View, ScrollView, StyleSheet } from "react-native"
import CategorySquare from "../components/CategorySquare";
import { CATEGORIES } from "../data/dummy-data";


function HomePage() {
    return (
        <ScrollView>
          <View style={styles.categoriesContainer}>
            {CATEGORIES.map((category) => (
              <CategorySquare
                key={category.id}
                color={category.color}
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
        flexWrap: 'wrap'
    }
    
})
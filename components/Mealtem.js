import { Text, View, Pressable, Image, StyleSheet } from "react-native"

function MealItem({ meal }) {

    return (
        <View>
            <Pressable>
                <View>
                    {/* instead of requiring a local file, we set the uri with the url */}
                    <Image style={styles.image} source={{ uri: meal.imageUrl}} />
                    <Text style={styles.title}>{meal.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
})
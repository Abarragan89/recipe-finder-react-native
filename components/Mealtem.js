import { Text, View, Pressable, Image } from "react-native"

function MealItem({ meal }) {

    return (
        <View>
            <Pressable>
                <View>
                    {/* instead of requiring a local file, we set the uri with the url */}
                    <Image source={{ uri: meal.imageUrl}} />
                    <Text>{meal.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;
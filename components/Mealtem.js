import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native";
import MealsCardDetails from "./MealsCardDetails";

function MealItem({ title, imageUrl, affordability, complexity, duration, id }) {

    const navigation = useNavigation();

    function renderDetails(mealId) {
        navigation.navigate('MealsDetails', {
            mealId
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ffffff82' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={renderDetails.bind(this, id)}
            >
                <MealsCardDetails
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                    title={title}
                    imageUrl={imageUrl}
                />
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5,
    }
})
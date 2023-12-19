import { Text, View, StyleSheet, Pressable, Platform } from "react-native";

function CategorySquare({ children, color, onPress }) {
    return (
        <View style={[styles.categoryContainer]}>
            <Pressable
                android_ripple={{ color: '#ffffff82' }}
                style={({ pressed }) =>[styles.innerContainer, { backgroundColor: color }, pressed ? styles.pressed : null]}
                onPress={onPress}
            >
                <View>
                    <Text style={styles.categoryText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategorySquare;

const styles = StyleSheet.create({
    categoryContainer: {
        borderRadius: 8,
        margin: 20,
        minWidth: 150,
        minheight: 150,
        elevation: 4,
        // overflow hidden prevents android ripple from extending beyond component
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        // shadow for iOS
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8

    },
    // this is the pressable
    innerContainer: {
        paddingVertical: 60,
        padding: 10,
        borderRadius: 8
    },
    categoryText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    pressed: {
        opacity: .6
    }
})


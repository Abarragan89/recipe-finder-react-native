import { Text, View, StyleSheet } from "react-native";

function CategorySquare({ children, color }) {
    return (
        <View style={[styles.categoryContainer, { backgroundColor: color }]}>
            <Text style={styles.categoryText}>{children}</Text>
        </View>
    );
};

export default CategorySquare;

const styles = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        borderRadius: 8,
        minWidth: 150,
        minheight: 150,
        margin: 20,
        padding: 10,
        paddingVertical: 60
    },
    categoryText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})


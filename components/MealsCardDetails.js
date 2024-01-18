import { View, Text, Image, StyleSheet } from "react-native";


function MealsCardDetails({ duration, complexity, affordability, imageUrl, title }) {
    return (
        <View style={styles.cardContainer}>
            <View>
                {/* instead of requiring a local file, we set the uri with the url */}
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{duration} min.</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            </View>
        </View>
    )
}

export default MealsCardDetails;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
    },

    detailItem: {
        marginHorizontal: 4,
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})

import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
function HeaderIcon({ onPress, icon, color, size }) {
    return  (
        <Pressable 
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    )
}

export default HeaderIcon;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})
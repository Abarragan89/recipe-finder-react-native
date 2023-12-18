import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import HomePage from './screens/Homepage';

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.appContainer}>
        <StatusBar style="light" />
        <HomePage />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  appContainer: {
    marginTop: Platform.OS === 'android' ? 50 : 10
  }
});

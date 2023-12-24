import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './screens/Homepage';
import MealsOverview from './screens/MealsOverview';
import MealDetails from './screens/MealDetails';

//object with two properties
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen name="MealsCategories" component={HomePage} options={{
            title: 'All Categories',
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }} />
          <Stack.Screen name="MealsOverview" component={MealsOverview}
            // this is one way to dynamically render a title or other data
            // you can pass a call back function that gives you the 'route' and 'navigation'
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId
            //   }
            // }} 
          />
          <Stack.Screen 
            name="MealsDetails"
            component={MealDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './screens/Homepage';
import MealsOverview from './screens/MealsOverview';
import MealDetails from './screens/MealDetails';
import Favorites from './screens/Favorites';
// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store'
import { Provider } from 'react-redux';

//object with two properties
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


// this RCF will be rendered in first screen stack
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen name='Categoires' component={HomePage} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons name='list' color='white' />
      }} />

      <Drawer.Screen name='Favorites' component={Favorites} options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name='star' color='white' />
        )
      }} />
    </Drawer.Navigator>
  )
} 

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{
              headerShown: false
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
            // adding a button to the header this way is only good
            // if it doesn't have to interact with the component it is in. 
            // if button needs to interact with component, create it in the 
            // component.
            // options={{
            //   headerRight: () => { return <Text>hello</Text>}
            // }}
            />
          </Stack.Navigator>

        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
};

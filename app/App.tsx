// Imports Maps Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//------------------------------------------------------------------------------

// Imports Components
import HomeScreen from "./Home";
import DetailScreen from "./Detail";
//------------------------------------------------------------------------------

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{
          headerShown: false
        }} component={HomeScreen}  />
        <Stack.Screen name="Detail" component={DetailScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function createStackNavigator() {
//   throw new Error('Function not implemented.');
// }


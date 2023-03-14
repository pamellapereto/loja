import {
  useFonts,
  DMSerifDisplay_400Regular,
} from '@expo-google-fonts/dm-serif-display';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
  var [fonteCarregada] = useFonts({
    DMSerifDisplay_400Regular,
  });

  if (!fonteCarregada) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>   
 
    </NavigationContainer>
  );
}

import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Accessories from './Accessories';
import Favorite from './Favorite';
import Cart from './Cart';
import { NavigationContainer } from '@react-navigation/native';
import ContentHome from '../components/ContentHome';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Accessories" component={Accessories} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Start({ navigation }) {
  return (
    <View style={design.container}>
      <Header tela={navigation} />
      <Banner />
      <ContentHome />
      <Menu tela={navigation} />
    </View>
  );
}

const design = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

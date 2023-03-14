import { Text, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Header(props) {
  return (
    <View style={design.header}>
      <View style={design.logo}>
        <Text style={design.name}>Loja Senhoritta</Text>
      </View>

      
      <TouchableOpacity onPress={() => props.tela.navigate("Favorite")}>
        <View style={design.favorite}>
          <EvilIcons name="heart" size={24} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.tela.navigate("Cart")}>
        <View style={design.cart}>
          <Entypo name="shopping-cart" size={20} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const design = StyleSheet.create({
  header: {
    backgroundColor: '#FFC1C1',
    flex: 0.11,
    flexDirection: 'row',
  },

  logo: {
    paddingTop: 46,
    marginRight: 'auto',
    marginLeft: 140,
  },

  name: {
    fontFamily: 'DMSerifDisplay_400Regular',
    fontSize: 20,
  },

  /*iconSearch: {
    
  },

  search: {
    flex: 0.6,
    paddingTop: 55,
    paddingLeft: 10,
    flexDirection: 'row',
    //backgroundColor: 'lightgreen'
  },

  textSearch: {
    backgroundColor: 'white',
    width: 170,
    height: 25,
    borderRadius: 10,
  },*/

  favorite: {
    paddingTop: 50,
    paddingRight: 10,
  },

  cart: {
    paddingTop: 50,
    paddingRight: 10,
  },
});

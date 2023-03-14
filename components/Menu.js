import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Menu(props) {
  return (
    <View style={design.menu}>
      <View style={design.iconModa}>
        <TouchableOpacity onPress={() => props.tela.navigate('Home')}>
          <Image
            source={require('../assets/dress.png')}
            style={design.dressIcon}
          />
          <Text style={design.menuText}>Moda feminina</Text>
        </TouchableOpacity>
      </View>

      <View style={design.iconAcessorios}>
        <TouchableOpacity onPress={() => props.tela.navigate('Accessories')}>
          <Image
            source={require('../assets/necklace.png')}
            style={design.necklaceIcon}
          />
          <Text style={design.menuText}>Acessórios</Text>
        </TouchableOpacity>
      </View>

      <View style={design.viewMore}>
        <TouchableOpacity onPress={alert}>
          <Ionicons
            name="md-menu-outline"
            size={22}
            color="black"
            style={design.moreicon}
          />
          <Text style={design.menuText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const design = StyleSheet.create({
  menu: {
    backgroundColor: 'yellow',
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  iconModa: {},

  iconAcessorios: {
    flex: 0.7,
  },

  menuText: {
    marginTop: 'auto',
    marginBottom: 'auto',
    padding: 10,
  },

  dressIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  necklaceIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  moreicon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

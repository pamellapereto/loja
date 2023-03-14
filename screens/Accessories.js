import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Accessories(props) {
  return (
    <View style={design.content}>
      <View style={design.accessories}>
        <Text>Acessórios</Text>
      </View>

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
    </View>
  );
}

const design = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
  },

  accessories: {
    backgroundColor: 'red',
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },

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

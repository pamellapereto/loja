import { View, StyleSheet, Image } from 'react-native';

export default function Banner() {
  return (
    <View style={design.menu}>
     <Image source={require('../assets/banner.png')} style = {design.imagemBanner}/>
    </View>
  );
}

const design = StyleSheet.create({
  menu: {
    backgroundColor: '#FFDEAD',
    textAlign: 'center',
    flex: 0.24,
  },

  imagemBanner: {
    width: '100%',
    height: '100%',
  },
})
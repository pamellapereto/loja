import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function ContentHome() {
  return (
    <View style={design.home}>
      <View style={design.container}>
        <View style={design.product1}>
          <ScrollView horizontal={true}>
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
          </ScrollView>
          <Text>Shorts jeans</Text>
          <Text>R$ 34.99</Text>
        </View>

             <View style={design.product1}>
          <ScrollView horizontal={true}>
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
          </ScrollView>
          <Text>Shorts jeans</Text>
          <Text>R$ 34.99</Text>
        </View>

             <View style={design.product1}>
          <ScrollView horizontal={true}>
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
          </ScrollView>
          <Text>Shorts jeans</Text>
          <Text>R$ 34.99</Text>
        </View>

             <View style={design.product1}>
          <ScrollView horizontal={true}>
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
            <Image
              style={design.imgProduct}
              source={{
                uri: 'https://img.ltwebstatic.com/gspCenter/goodsImage/2023/1/31/5445485991_1005024/6D7E499E7D135E4399939E179E59A656_thumbnail_600x.jpg',
              }}
            />
          </ScrollView>
          <Text>Shorts jeans</Text>
          <Text>R$ 34.99</Text>
        </View>   

      </View>
    </View>
  );
}

const design = StyleSheet.create({
  home: {
    display: 'flex',
    flex: 0.6,
  },

  container: {
    flexWrap: 'wrap',
    //flexDirection: 'row',
    padding: 5,
  },

  product1: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '34%',
    height: '50%',
    marginRight: 100,
    marginLeft: 11,
    marginTop: -10,
  },

  imgProduct: {
    marginTop: 'auto',
    marginBottom: 'auto',
    resizeMode: 'cover',
    margin: 10,
    width: 110,
    height: 150,
    borderRadius: 10,
  },
});

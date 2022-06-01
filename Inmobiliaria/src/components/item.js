import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import IconAwesone from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import IconAntDesing from 'react-native-vector-icons/dist/AntDesign';
import IconSimple from 'react-native-vector-icons/dist/SimpleLineIcons';
import inmobiliaries from '../dataBase/data';

const Item = props => {
  const {
    name,
    direction,
    img,
    numberRooms,
    numberbaths,
    surface,
    price,
    review,
  } = props;
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.review}>
          <IconAntDesing
            name="star"
            size={25}
            color="#fff"
            style={styles.iconStar}
          />
          <Text style={styles.textReview}>{review}</Text>
        </View>
        <Image source={img} style={styles.imgStyle} />
      </View>
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.locationStyle}>
          <Icon
            name="md-location-outline"
            size={25}
            color="#fff"
            style={styles.iconLocate}
          />
          <Text style={styles.text1}>{direction}</Text>
        </View>
        <View style={styles.elementsIcons}>
          <View style={styles.elementsPosition}>
            <Icon
              name="md-bed-outline"
              size={25}
              color="#fff"
              style={styles.iconLocate}
            />
            <Text style={styles.textPosition}>{numberRooms}</Text>
          </View>
          <View style={styles.elementsPosition}>
            <IconAwesone
              name="bathtub-outline"
              size={25}
              color="#fff"
              style={styles.iconLocate}
            />
            <Text style={styles.textPosition}>{numberbaths}</Text>
          </View>
          <View style={styles.elementsPosition}>
            <IconSimple
              name="size-fullscreen"
              size={25}
              color="#fff"
              style={styles.iconLocate}
            />
            <Text style={styles.textPosition}>{surface}</Text>
          </View>
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View>
        <Icon
          name="md-heart-circle"
          size={25}
          color="#fff"
          style={styles.mgIcon}
        />
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 105,
    backgroundColor: '#EAEFD9',
    borderRadius: 10,
    margin: 20,
    flexDirection: 'row',
    paddingTop: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
  },
  iconLocate: {
    color: 'black',
    position: 'absolute',
    fontSize: 20,
  },
  textPosition: {
    paddingLeft: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  text1: {
    paddingLeft: 25,
    fontSize: 15,
  },
  elementsIcons: {
    flexDirection: 'row',
  },
  elementsPosition: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 3,
    marginTop: 3,
  },
  locationStyle: {
    marginLeft: 15,
  },
  price: {
    paddingLeft: 15,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  imgStyle: {
    height: 80,
    width: 80,
    borderRadius: 8,
    marginLeft: 20,
    marginTop: 10,
  },
  paddingElements: {
    paddingBottom: 3,
  },
  mgIcon: {
    fontSize: 28,
    marginTop: 65,
    paddingLeft: 20,
    color: 'green',
  },
  iconStar: {
    color: '#F3C537',
    fontSize: 12,
    marginTop: 3,
    marginLeft: 3,
  },
  review: {
    flexDirection: 'row',
    backgroundColor: '#FAE7AD',
    borderRadius: 7,
    width: 40,
    height: 18,
    position: 'absolute',
    zIndex: 1,
    marginTop: 65,
    marginLeft: 40,
  },
  textReview: {
    fontSize: 12,
    marginTop: 1,
    fontWeight: 'bold',
    color: '#A58C40',
  },
});

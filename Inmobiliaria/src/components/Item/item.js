import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import IconAwesone from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import IconAntDesing from 'react-native-vector-icons/dist/AntDesign';
import IconSimple from 'react-native-vector-icons/dist/SimpleLineIcons';
import itemStyles from './itemStyles';

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
    onIconclick,
    icon,
  } = props;
  return (
    <View style={itemStyles.container}>
      <View>
        <View style={itemStyles.review}>
          <IconAntDesing
            name="star"
            size={25}
            color="#fff"
            style={itemStyles.iconStar}
          />
          <Text style={itemStyles.textReview}>{review}</Text>
        </View>
        <Image source={{uri: img}} style={itemStyles.imgStyle} />
      </View>
      <View>
        <Text style={itemStyles.title}>{name}</Text>
        <View style={itemStyles.locationStyle}>
          <Icon
            name="md-location-outline"
            size={25}
            color="#fff"
            style={itemStyles.iconLocate}
          />
          <Text style={itemStyles.text1}>{direction}</Text>
        </View>
        <View style={itemStyles.elementsIcons}>
          <View style={itemStyles.elementsPosition}>
            <Icon
              name="md-bed-outline"
              size={25}
              color="#fff"
              style={itemStyles.iconLocate}
            />
            <Text style={itemStyles.textPosition}>{numberRooms}</Text>
          </View>
          <View style={itemStyles.elementsPosition}>
            <IconAwesone
              name="bathtub-outline"
              size={25}
              color="#fff"
              style={itemStyles.iconLocate}
            />
            <Text style={itemStyles.textPosition}>{numberbaths}</Text>
          </View>
          <View style={itemStyles.elementsPosition}>
            <IconSimple
              name="size-fullscreen"
              size={25}
              color="#fff"
              style={itemStyles.iconLocate}
            />
            <Text style={itemStyles.textPosition}>{surface}</Text>
          </View>
        </View>
        <Text style={itemStyles.price}>{price}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Icon
            name="md-heart-circle"
            size={25}
            color="#fff"
            style={itemStyles.mgIcon}
            onPress={onIconclick}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;

import React from 'react';
import {StyleSheet} from 'react-native';

const ItemStyles = StyleSheet.create({
  container: {
    width: 370,
    height: 105,
    backgroundColor: '#EAEFD9',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
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
  mgIcon2: {
    fontSize: 28,
    marginTop: 65,
    paddingLeft: 20,
    color: 'red',
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

export default ItemStyles;

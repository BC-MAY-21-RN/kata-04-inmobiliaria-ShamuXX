import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import List from './src/components/List';
import Inmuebles from './src/dataBase/data.json';

const App = () => {
  return (
    <View>
      <Text style={styles.text}>Inmuebles</Text>
      <List data={Inmuebles} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 5,
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
  },
});

export default App;

import React, {useState} from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import Item from './Item/item';
import ItemStyles from './Item/itemStyles';

const List = props => {
  const [colorChange, setColorChange] = useState(false);
  return (
    <View>
      <FlatList
        data={props.data}
        keyExtractor={item => item.id}
        pagingEnabled={true}
        renderItem={({item}) => <Item {...item} />}
        icon={colorChange ? ItemStyles.mgIcon2 : ItemStyles.mgIcon}
        onPress={() => setColorChange(!colorChange)}
      />
    </View>
  );
};

export default List;

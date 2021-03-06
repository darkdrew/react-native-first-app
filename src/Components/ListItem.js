import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const ListItem = (props) => {
  return (
    <View style={styles.placesListItem}>
      <Text>{props.place}</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
  placesListItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
  }
})

export default ListItem;

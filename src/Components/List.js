import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const List = (places) => {
    alert( places)
    return (
        <View>dadsa</View>
    )
    // places.map( (place, i) => {
    //     return (
    //         <View style={styles.placesListContainer}>
    //             <ListItem key={i} place={place} />
    //         </View>
    //     )
    // })
}

const styles = StyleSheet.create({
    placesListContainer: {
        width: '100%',
    },
})

export default List;

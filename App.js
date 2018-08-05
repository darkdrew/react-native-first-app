import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// childs
import ListItem from './src/Components/ListItem';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      placesName: '',
      places: [],
    }
  }
  
  onSubmitPlaces = () => {
    const emptyPlaces = this.state.placesName.trim() === '';
    if(emptyPlaces) return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placesName)
      };
    })
  }

  render() {
    const placesDisplay = this.state.places.map( (place, i) => {
      return <ListItem key={i} place={place} />
    })
    return (
      <View style={styles.container}>
        <Text>Andrew Wants Macbook!</Text>
        <View style={styles.searchBarContainer}>
          <TextInput 
            style={styles.searchBar}
            placeholder={"search cool place"}
            onChangeText={(placesName) => this.setState({placesName})}
            value={this.state.placesName} 
          />
          <Button 
            style={styles.searchBarBtn}
            title={"Add"}
            onPress={this.onSubmitPlaces}
          />
        </View>
        <View style={styles.placesListContainer}>{placesDisplay}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBarContainer: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    width: '60%',
  },
  searchBarBtn: {
    width: '30%'
  },
  placesListContainer: {
    width: '100%',
  },
});

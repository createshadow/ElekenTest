import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker} from 'react-native';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            text: '',
            values: [1, 2, 3],
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSearch(event){
        console.log(event);
    }

    handleChange(event){
        let text = event.target.value;

        this.setState = { text };
    }

    render() {
    return (
      <View style={styles.container}>
          <Text>Search term: </Text>
          <TextInput placeholder={this.state.text} style={styles.searchInput} onChange={this.handleChange} autoCorrect={true}/>
          <Text>Columns: </Text>
          <Picker enabled={true} selectedValue={this.state.values}/>
          <Button title="Search" onPress={this.handleSearch()} style={styles.button}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
    button: {
        color: 'blue',
        backgroundColor: 'white'
    },
    searchInput: {
      display: 'flex',
      width: 150
    }
});

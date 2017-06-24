import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker} from 'react-native';

export default class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            text: 'Write your response'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let text = event.target.value;

        this.setState({text: text});
    }

    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Search term: </Text>
                <TextInput placeholder={this.state.text} style={styles.searchInput} onChange={this.handleChange} autoCorrect={true}/>
                <Text>Columns: </Text>
                <Text>{this.state.text}</Text>
                <Button title="Search" onPress={() => navigate('Picture', {textSearch: this.state.text})} style={styles.button}/>
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
        width: 150
    }
});

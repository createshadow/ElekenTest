import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Slider} from 'react-native';
import Background from './Background';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            text: 'Write your response',
            numberOfColumns: 1
        };

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeSlider = this.handleChangeSlider.bind(this);
    }

    handleChangeText(textSource){
        this.setState({text: textSource});
    }

    handleChangeSlider(value){
        this.setState({numberOfColumns: value})
    }

    render() {

        const { navigate } = this.props.navigation;
        return (
                <Background>
                    <Text style={{color: 'grey', marginBottom: 30, fontSize: 25}}>Make your dream come true</Text>
                    <Text>Search term: </Text>
                    <TextInput placeholder={this.state.text} style={styles.searchInput} onChangeText={(text) => this.handleChangeText(text)} autoCorrect={true} autoFocus={true}/>
                    <Text>Columns: </Text>
                    <Slider maximumValue={5} minimumValue={1} step={1} value={1} style={styles.searchSlider} onValueChange={(value) => this.handleChangeSlider(value)}/>
                    <Text>{this.state.numberOfColumns}</Text>
                    <Button title="Search" onPress={() => navigate('Picture', {textSearch: this.state.text, columns: this.state.numberOfColumns})} style={styles.button}/>
                </Background>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: 'blue',
        backgroundColor: 'white'
    },
    searchInput: {
        width: width / 2,
        height: height / 15,
        color: 'black'
    },
    searchSlider: {
        width: 150
    }
});

import React, { Component } from 'react';
import { StyleSheet, Image, View, ActivityIndicator} from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Background extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoading: true
    //     }
    // }

    // componentDidMount() {
    //     setInterval(() => {
    //         return fetch('https://pixabay.com/api/?key=5728180-3553a090ced7678b568584692&q=cats&per_page=20&page=1&image_type=photo')
    //             .then((response) => response.json())
    //             .then((responseJson) => {
    //                 this.setState({
    //                     isLoading: false,
    //                     urlSource: responseJson.hits[0].previewURL
    //                 })
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    //     }, 2500)
    // }

    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <View style={{flex: 1, justifyContent: 'center'}}>
        //             <ActivityIndicator />
        //         </View>
        //     );
        // }

        return (

            <Image source={require('./sunset.jpg')}
                   style={styles.backgroundImage}>

                {this.props.children}

            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
import React, { Component } from 'react';
import { ActivityIndicator, ListView, View, Image, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const gutter = 5;

export default class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://pixabay.com/api/?key=5728180-3553a090ced7678b568584692&q=' + this.props.navigation.state.params.textSearch + '&per_page=50&page=1&image_type=photo')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.hits)
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {
        const {columns} = this.props.navigation.state.params;
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Image source={{uri: rowData.previewURL}} style={{width: (width - gutter * 3) / columns, height: height / 5, backgroundColor: 'black', margin: 1, borderRadius: 15}} resizeMode={Image.resizeMode.cover}/>}
                    contentContainerStyle={styles.list}
                    enableEmptySections={false}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});
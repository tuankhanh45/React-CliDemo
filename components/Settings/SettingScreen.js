import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SettingScreen extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View
                    style={{ flexDirection: 'row', paddingLeft: 10, backgroundColor: 'black', borderBottomColor: 'gray', borderBottomWidth: 0.2, }}>
                    <Text style={{ flex: 8, textAlign: "center", fontSize: 30, color: 'white' }}>Settings </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                <Text>hello</Text>
            </View>
        );
    }
}

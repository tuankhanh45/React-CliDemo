/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class LotteryNav extends Component {
  constructor(props) {
    super(props);
  }

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          backgroundColor: 'black',
          borderBottomColor: 'gray',
          borderBottomWidth: 0.2,
        }}>
        <Text
          style={{flex: 8, textAlign: 'center', fontSize: 30, color: 'white'}}>
          Lottery Prize{' '}
        </Text>
      </View>
    );
  }
}

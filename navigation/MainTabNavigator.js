import React from 'react';
import {Platform, View, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import LotteryScreen from '../components/Lottery/LotteryScreen';
import SoccerScreen from '../components/Soccer/SoccerScreen';
import SettingScreen from '../components/Settings/SettingScreen';

// Lottery stack
const LotteryStack = createStackNavigator({
  Lottery: LotteryScreen,
});

LotteryStack.navigationOptions = {
  tabBarLabel: 'Lottery',
  tabBarIcon: ({focused}) => (
    <Image
      source={require('../assets/images/icon_lottery.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginBottom: -3,
        height: 20,
        width: 20,
        tintColor: focused ? '#ffc266' : '#fff',
      }}
    />
  ),
};
LotteryStack.path = '';

// Soccer stack
const SoccerStack = createStackNavigator({
  Soccer: SoccerScreen,
});

SoccerStack.navigationOptions = {
  tabBarLabel: 'Soccer',
  tabBarIcon: ({focused}) => (
    <Image
      source={require('../assets/images/icon_soccer.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginBottom: -3,
        height: 20,
        width: 20,
        tintColor: focused ? '#ffc266' : '#fff',
      }}
    />
  ),
};
SoccerStack.path = '';

//Setting stack
const SettingStack = createStackNavigator({
  Setting: SettingScreen,
});

SettingStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({focused}) => (
    <Image
      source={require('../assets/images/icon_settings.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginBottom: -2,
        height: 20,
        width: 20,
        tintColor: focused ? '#ffc266' : '#fff',
      }}
    />
  ),
};
SettingStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    LotteryStack,
    SoccerStack,
    SettingStack,
  },
  {
    tabBarOptions: {
      style: {backgroundColor: 'black'},
      activeTintColor: '#ffc266',
      inactiveTintColor: '#fff',
      labelStyle: {
        fontWeight: 'bold',
      },
    },
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: 'none',
    mode: 'modal',
    cardStyle: {
      opacity: 1,
    },
  },
);

tabNavigator.path = '';

export default tabNavigator;

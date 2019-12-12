/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { Platform, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {

  // const [isLoadingComplete, setLoadingComplete] = useState(false);
  // if (!isLoadingComplete && !props.skipLoadingScreen) {

  //   // return Loading screen here
  //   return (
  //     <View>
  //       <Text>Loading</Text>
  //     </View>
  //   );
  // } else {

  // return screens App
  return (
    <View style={{ flex: 1 }}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
  //}
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      // require image here
    ]),
  ]);
}
function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

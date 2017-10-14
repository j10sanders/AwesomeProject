/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';



export default class Component1 extends Component{
  render() {
    return (
      <View>
        <Text>Hi from Component1</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);

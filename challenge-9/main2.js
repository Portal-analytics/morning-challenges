import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';
import Home from './index.ios.js';
class AwesomeProject extends Component {
  buttonClicked() {
    
  }
  render() {
    return (
      <View>
      <Text style={styles.welcome}>
        Hello from YOYOYOYOYOYO
      </Text>
      <TouchableHighlight
      style = {styles.button}
      onPress = {this.buttonClicked.bind(this)}>
      <View>
      <Text> Go back </Text>
      </View>
      </TouchableHighlight>
      </View>
    );
  }
}

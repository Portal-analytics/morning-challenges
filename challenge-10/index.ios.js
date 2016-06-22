/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <TextInput>
          placeholder= 'User Name'
        </TextInput>
        <TextInput >
          placeholder= 'Password'
        </TextInput>
        <Text style={styles.welcome}>
          Sign In
        </Text>
        <View>
          <Text style={styles.subtleText}>
            Dont have an account?
          </Text>
          <Text style={styles.welcome}>
          Sign Up
          </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    margin: 10,
  },
  subtleText: {
    fontSize: 14,
    color: 'grey',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'contain',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

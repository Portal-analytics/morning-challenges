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
  TouchableHighlight,
  Image,
  TextInput,
} from 'react-native';

class AwesomeProject extends Component {

  buttonClicked() {
    console.log('fuck you pussy');
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello from Main
        </Text>



        <Image source={require('background.png')} style={styles.backgroundImage}>
          <Image source={require('logo.png')} style={styles.logoImage}/>
        </Image>
        <TextInput
        onChangeText={(text) => this.setState({text})}
        
        placeholder = "Username"
        />
        <TextInput
        onChangeText={(text) => this.setState({text})}

        placeholder = "Password"
        />
        <Text> Dont have an account? Stop being a little bitch and sign up </Text>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  logoImage: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

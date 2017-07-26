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
  TouchableOpacity,
  Animated
} from 'react-native';

export default class AwesomeAnimation extends Component {
  constructor(){
    super()
    this.animated = new Animated.Value(0)
  }
  handlePressButton = () => {
    this.animated.setValue(0)
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 3000
    }).start()
  }
  render() {
    const opacity = this.animated.interpolate({
      inputRange: [0,1],
      outputRange: [0,1]
    })
    const translateX = this.animated.interpolate({
      inputRange: [0,1],
      outputRange: [-500, 1]
    })
    const transform = [ { translateX } ]
    return (
      <View style={styles.container}>
        <View style={styles.target}>
          <Animated.Text style={[styles.logo, {opacity}]}>
            REFACTORY
          </Animated.Text>
        </View>
        <TouchableOpacity
          onPress={this.handlePressButton}
        >
          <Text style={styles.button}>Click To Animate</Text>
        </TouchableOpacity>
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
  target: {
    width: 300,
    height: 300,
    backgroundColor: '#e4e4e4',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontSize: 24,
    color: '#3a3a3a'
  },
  button: {
    width: 200,
    padding: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#333333'
  }
});

AppRegistry.registerComponent('AwesomeAnimation', () => AwesomeAnimation);

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
  KeyboardAvoidingView,
  Image,
  View
} from 'react-native';


import LoginForm from './loginform';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
		<View style={styles.logoContainer}>
			<Image style={styles.logo}
				source={require('../images/logo.png')}
			/>
		</View>
		<View style={styles.formContainer}>
			<LoginForm />
		</View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  logoContainer: {
	justifyContent: 'center',
    backgroundColor: '#FFF',
	alignItems: 'center',
	flexGrow: 1
  },
  logo: {
	width: 209,
	height: 125
  },
  formContainer: {
	flexGrow: 1  
  },
});

AppRegistry.registerComponent('app', () => app);

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
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';

import {
	Actions
} from 'react-native-router-flux';

const dismissKeyboard = require('dismissKeyboard');

export default class LoginForm extends Component {
  constructor(props){
	super(props);
	this.state = {
		username:'',
		password:''
	};
  }
  render() {
    return (
      <View style={styles.container}>
		<TextInput
			placeholder="username or email"
			placeholderTextColor="rgba(0,0,0,0.3)"
			returnKeyLabel="Next"
			onSubmitEditing={() => this.password.focus()}
			keyboardType="email-address"
			autoCapitalize="none"
			autoCorrect={false}
			style={styles.input} 
			onChangeText={(text) => {
				this.setState({
					username: text
				});
			}}
		/>
		<TextInput
			placeholder="password"
			placeholderTextColor="rgba(0,0,0,0.3)"
			returnKeyLabel="Go"
			onSubmitEditing={() => this.password.focus()}
			secureTextEntry
			style={styles.input}
			ref={(input) => this.password = input}
			onChangeText={(text) => {
				this.setState({
					password: text
				});
			}}
		/>
		<TouchableOpacity 
			style={styles.button} 
			onPress={() => {
				if(!this.state.username || !this.state.password) {
					
				}
				else {
					fetch('http://192.168.1.106:3000/login', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							username: this.state.username,
							password: this.state.password
						})})
						.then((response) => response.json())
							.then((responseJson) => {
								dismissKeyboard();
								Actions.categories({username:this.state.username});
					});
					
				}
				
		}}>
			<Image
			source={require('../images/login.png')}
			/>
		</TouchableOpacity>
		<Button onPress={Actions.register} title='Register'>Register</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
	paddingLeft: 50,
	paddingRight: 50
  },
  input: {
	  textAlign: 'center'
  },
  button: {
	  justifyContent: 'center',
	  paddingLeft: 20,
	  marginBottom: 25
  }
});

AppRegistry.registerComponent('app', () => app);

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

export default class RegisterForm extends Component {
  constructor(props){
	super(props);
	this.state = {
		username:'',
		password:'',
		name:'',
		mobile:'',
		code:'',
		verified:'false',
		otp:''
	};
  }
  render() {
    return (
      <View style={styles.container}>
		<TextInput
			placeholder="Email"
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
			placeholder="Password"
			placeholderTextColor="rgba(0,0,0,0.3)"
			returnKeyLabel="Next"
			onSubmitEditing={() => this.name.focus()}
			secureTextEntry
			style={styles.input}
			ref={(input) => this.password = input}
			onChangeText={(text) => {
				this.setState({
					password: text
				});
			}}
		/>
		<TextInput
			placeholder="Name"
			placeholderTextColor="rgba(0,0,0,0.3)"
			returnKeyLabel="Next"
			onSubmitEditing={() => this.mobile.focus()}
			keyboardType="default"
			autoCapitalize="none"
			autoCorrect={false}
			style={styles.input} 
			ref={(input) => this.name = input}
			onChangeText={(text) => {
				this.setState({
					name: text
				});
			}}
		/>
		<TextInput
			placeholder="Mobile Number"
			placeholderTextColor="rgba(0,0,0,0.3)"
			returnKeyLabel="Next"
			onSubmitEditing={() => this.verified.focus()}
			keyboardType="phone-pad"
			autoCapitalize="none"
			autoCorrect={false}
			style={styles.input} 
			ref={(input) => this.mobile = input}
			onChangeText={(text) => {
				this.setState({
					mobile: text
				});
			}}
		/>
		<TextInput
			placeholder="OTP"
			placeholderTextColor="rgba(0,0,0,0.3)"
			returnKeyLabel="Done"
			onSubmitEditing={() => this.verified.blur()}
			keyboardType="numeric"
			autoCapitalize="none"
			autoCorrect={false}
			style={styles.input} 
			ref={(input) => this.verified = input}
			onChangeText={(text) => {
				this.setState({
					otp: text
				});
			}}
		/>
		<TouchableOpacity 
			style={styles.button} 
			onPress={() => {
				if(this.state.username == '' || this.state.password == '' || this.state.mobile == '' || this.state.name == '') { //|| this.state.otp == '') {
					alert("Please fill in all fields");
				}
				/*else if(new Date().valueOf() - this.state.verified * 1000 > 60) {
					alert("Please verify your otp within a minute");
				}
				else if(this.state.otp != this.state.code) {
					alert("Incorrect otp, please press verify to send sms again");
				}*/
				else {
					fetch('http://192.168.1.106:3000/register', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							username: this.state.username,
							password: this.state.password,
							name: this.state.name,
							mobile: this.state.mobile,
						})})
						.then((response) => response.json())
							.then((responseJson) => {
								alert("Account registered! Please log in");
								Actions.pop();
					});
					
				}
				
		}}>
			<Text style={styles.button}>Register</Text>
		</TouchableOpacity>
		<Button onPress={() => {
			if(this.state.verified != "true") {
				this.state.code = (Math.floor(100000 + Math.random() * 900000)).toString().substring(0, 4);
				this.state.verified = new Date().valueOf();
				fetch('http://192.168.1.106:3000/sms?code=' + this.state.code, {method: 'GET'})
					.then((response) => response.json())
						.then((responseJson) => {
							alert("An sms has been sent to your phone!");
				});
			}
		}} title='Verify'>Verify</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#FFF',
	paddingLeft: 50,
	paddingRight: 50,
	paddingTop: 100
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

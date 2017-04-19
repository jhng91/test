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
  TextInput
} from 'react-native';

import {
	Actions
} from 'react-native-router-flux';
import {GiftedChat} from 'react-native-gifted-chat';

import SocketIOClient from '../node_modules/socket.io-client/dist/socket.io.js';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  messages:[],
	  target:'chatroom',
	  userId:this.props.username,
	  type:'general'
    };
	this.onReceivedMessage = this.onReceivedMessage.bind(this);
	this.onSend = this.onSend.bind(this);
	this._storeMessages = this._storeMessages.bind(this);
    this.socket = SocketIOClient('http://192.168.1.106:3000');
	this.socket.on('message', this.onReceivedMessage);
	this.socket.emit('userJoined', this.state.userId);
  }
  // event handlers
  onReceivedMessage(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  onSend(messages=[]) {
    this.socket.emit('message', messages[0]);
    this._storeMessages(messages);
  }
  // Helper functions
  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
 
  render() {
    return (
      <GiftedChat
		messages={this.state.messages}
		onSend={this.onSend}
		user={{
			_id: this.state.userId,
			name: this.state.userId,
			avatar: 'https://facebook.github.io/react/img/logo_og.png',
		}}
		renderAvatarOnTop='true'
		locale="testing hello"
		/>
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

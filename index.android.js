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
  View
} from 'react-native';

import {
	Router,
	Scene
} from 'react-native-router-flux';

import Login from './components/login';
import Register from './components/registerform';
import Categories from './components/categories';
import SubCategories from './components/subcategories';
import Chat from './components/chat';

export default class app extends Component {
  render() {
    return (
	  <Router>
		<Scene key='root'>
		  <Scene key='login' component={Login} title='Login' />
		  <Scene key='register' component={Register} title='Register' />
		  <Scene key='categories' component={Categories} title='Categories' renderBackButton={()=>(null)} />
		  <Scene key='subcategories' component={SubCategories} title='SubCategories'  />
		  <Scene key='chat' component={Chat} title='Chat' />
		</Scene>
	  </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
});

AppRegistry.registerComponent('app', () => app);

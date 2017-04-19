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
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Tabs from 'react-native-tabs';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  constructor(props){
	super(props);
	this.state = {
		page:'browse'
	};
  }
  render() {
    return (
      <View behavior="padding" style={styles.container}>
		<View style={styles.topContainer}>
			<TextInput style={styles.search}
				placeholder="search"
				placeholderTextColor="rgba(0,0,0,0.3)"
				style={styles.input}
			/>
			<Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
				<Text name="browse">Browse</Text>
				<Text name="discover">Discover</Text>
				<Text name="activities">Activities</Text>
			</Tabs>
		</View>
		<View style={styles.categoriesContainer}>
			<TouchableOpacity>
				<Image style={styles.logo}
					source={require('../images/razer.png')}
				/>
			</TouchableOpacity>
		</View>
		<View style={styles.categoriesContainer}>
			<Image style={styles.logo}
				source={require('../images/tuition.png')}
			/>
			<Image style={styles.logo}
				source={require('../images/sports.png')}
			/>
			<Image style={styles.logo}
				source={require('../images/tuition.png')}
			/>
			<Image style={styles.logo}
				source={require('../images/sports.png')}
			/>
			<Image style={styles.logo}
				source={require('../images/tuition.png')}
			/>
			<Image style={styles.logo}
				source={require('../images/sports.png')}
			/>
			<Text>
				{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
			</Text>
			
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
	flex: 1
  },
  topContainer: {
    backgroundColor: '#FFF',
	paddingLeft: 50,
	paddingRight: 50,
	flexGrow: 1
  },
  categoriesContainer: {
	justifyContent: 'center',
    backgroundColor: '#000',
	flexDirection: 'row',
	flexWrap: 'wrap'
  },
  search: {
  }
});

AppRegistry.registerComponent('app', () => app);

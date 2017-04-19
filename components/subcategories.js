import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    StatusBar,
    ScrollView,
	TouchableOpacity,
	TextInput,
	Button
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import Tabs from 'react-native-tabs';

StatusBar.setBarStyle('light-content');
console.disableYellowBox = true; // This gets in the way!


// imageSize is used to statically size <Image/> instances
const windowDims = Dimensions.get('window'),
      itemSize   = (windowDims.width / 2) - 20; 

// This is *the* placeholder image to be used in steps #3 and #5
const placeholder = require('../images/visualcommunication.png');

export default class SubCategories extends Component {
    // Initial state
    state = {
        data:[],
		page:'browse',
		chatusers:'0'
    };
	componentWillMount() {
		fetch('http://192.168.1.106:3000/chat', {method: 'GET'})
			.then((response) => response.json())
				.then((responseJson) => {
					this.state.chatusers = responseJson.users;
		});
	}
    // This will be responsible for rendering the image components
    buildImages(data) {
        let images  = [],
            length  = data.length,
            i       = 0,
            source,
            item;
		images.push(
			<TouchableOpacity style={styles.child}>
				<Image source={require('../images/subcats.png')} key={'img' + i} style={styles.child} />
			</TouchableOpacity>
        )
		i++;
		images.push(
			<TouchableOpacity style={styles.child}>
				<Image source={require('../images/subcats.png')} key={'img' + i} style={styles.child} />
			</TouchableOpacity>
        )
		i++;
		images.push(
            <TouchableOpacity style={styles.child}>
				<Image source={require('../images/subcats.png')} key={'img' + i} style={styles.child} />
			</TouchableOpacity>
        )
		i++;
		images.push(
            <TouchableOpacity style={styles.child}>
				<Image source={require('../images/subcats.png')} key={'img' + i} style={styles.child} />
			</TouchableOpacity>
        )
		i++;
		
        /*// Empty array?
        if (data.length == 0) {
            // This console.log() call can be removed.
            console.log('Rendering placeholders');
            // Fill the array with 10 undefines
            data.length = length = 10;
        }
        else {
            // This else branch is here just for debugging and can be removed.
            console.log(`Got data. Rendering ${length} images.`);
        }

        for (; i < length; i++) {
            item = data[i];

            // For when we actually have data
            if (item) {
                source = {
                    require(item.url)
                }
            }
			console.log(item.url);

            images.push(
                <Image style={styles.child} 
                       source={source} 
                       key={'img' + i}/>
            )
        }*/
		
        return images;
    }

    render() {
        let state  = this.state,
            data   = state.data,
            images = this.buildImages(data),
			chatusers = this.state.chatusers;

        return (
            <View style={{flex:1}}>
				<View style={styles.topContainer}>
					<Tabs selected={this.state.page} style={{backgroundColor:'white'}}
					  selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
						<Text name="browse">Browse</Text>
						<Text name="discover">Discover</Text>
						<Text name="activities">Activities</Text>
					</Tabs>
				</View>
				<View style={styles.categoriesContainer}>
					<Text>Users: {chatusers}     </Text>
					<Button onPress={() => {Actions.chat({username:this.props.username})}} title='Chat'>Chat</Button>
				</View>
                <ScrollView contentContainerStyle={styles.container}
                            style={{backgroundColor: '#F5FCFF'}}>
						{images}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
	container : {
		justifyContent  : 'center',
		alignItems      : 'center',
		backgroundColor : '#F5FCFF',
		flexDirection   : 'row',
		flexWrap        : 'wrap'
	},
	topContainer : {
		paddingTop: 100,
		justifyContent  : 'center',
		alignItems      : 'center',
		backgroundColor : '#F5FCFF',
		flexDirection   : 'row',
		flexWrap        : 'wrap'
	},
	categoriesContainer : {
		justifyContent  : 'center',
		alignItems      : 'center',
		backgroundColor : '#F5FCFF',
		flexDirection   : 'row',
		flexWrap        : 'wrap'
	},
	child : {
		width  : itemSize,
		height : itemSize,
		margin : 7
	},
});
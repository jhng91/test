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
	TextInput
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

export default class Categories extends Component {
    // Initial state
    state = {
        data : [],
		page:'browse'
    };
	
    // This will be responsible for rendering the image components
    buildImages(data) {
        let images  = [],
            length  = data.length,
            i       = 0,
            source,
            item;
		images.push(
			<TouchableOpacity onPress={() =>
				Actions.subcategories({username:this.props.username})
			}>
				<Image source={require('../images/tuition.png')} key={'img' + i}/>
			</TouchableOpacity>
        )
		i++;
		images.push(
			<TouchableOpacity>
				<Image source={require('../images/empty.png')} key={'img' + i}/>
			</TouchableOpacity>
        )
		i++;
		images.push(
            <TouchableOpacity>
				<Image source={require('../images/empty.png')} key={'img' + i}/>
			</TouchableOpacity>
        )
		i++;
		images.push(
            <TouchableOpacity>
				<Image source={require('../images/empty.png')} key={'img' + i}/>
			</TouchableOpacity>
        )
		i++;
		images.push(
            <TouchableOpacity>
				<Image source={require('../images/empty.png')} key={'img' + i}/>
			</TouchableOpacity>
        )
		i++;
		images.push(
            <TouchableOpacity>
				<Image source={require('../images/empty.png')} key={'img' + i}/>
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
            images = this.buildImages(data);

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
					<TouchableOpacity>
						<Image style={styles.logo}
							source={require('../images/razer.png')}
						/>
					</TouchableOpacity>
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

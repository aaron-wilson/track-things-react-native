'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber,
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'https://api.nestoria.co.uk/api?' + querystring;
}

export default class SearchPage extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    searchString: '',
	    isLoading: false,
	  };
	}

	_onSearchStringChanged = (event) => {
	  console.log('_onSearchStringChanged');
	  this.setState({ searchString: event.nativeEvent.text });
	  console.log('Current: '+this.state.searchString+', Next: '+event.nativeEvent.text);
	};

	_executeQuery = (query) => {
	  console.log(query);
	  this.setState({ isLoading: true });
	};

	_onGoPressed = () => {
	  const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
	  this._executeQuery(query);
	};

  render() {
  	console.log('SearchPage.render');
  	const spinner = this.state.isLoading ?
  		<ActivityIndicator size='large' /> : null;
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Find your dream home.
        </Text>
        <View style={styles.flowRight}>
				  <TextInput
				    style={styles.searchInput}
				    value={this.state.searchString}
				    onChange={this._onSearchStringChanged}
				    placeholder='Enter city or ZIP code' />
				  <Button
				    onPress={this._onGoPressed}
				    color='#48BBEC'
				    title='Go'
				  />
				</View>
				<Image source={require('./Resources/house/house.png')} style={styles.image}/>
				{spinner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  alignSelf: 'stretch',
	},
	searchInput: {
	  height: 36,
	  padding: 4,
	  marginRight: 5,
	  flexGrow: 1,
	  fontSize: 18,
	  borderWidth: 1,
	  borderColor: '#48BBEC',
	  borderRadius: 8,
	  color: '#48BBEC',
	  textAlign: 'center',
	},
	image: {
		marginTop: 20,
	  width: 217,
	  height: 138,
	},
});

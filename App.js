import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import Tabs from './src';

const key = 'cities';

export default class App extends Component{

  state = {
    cities : []
  }

  async componentDidMount(){
    try{
      const cities = await AsyncStorage.getItem(key)
      console.log('Cities: ',cities);
      this.setState({cities : JSON.parse(cities)})
    }catch(e){
      console.log('error: ',e)
    }
  }

  addCity = (city) => {
    const cities = this.state.cities;
    cities.push(city);
    AsyncStorage.setItem(key,JSON.stringify(cities))
    .then(() => console.log('Item Stored'))
    .catch(err => {
      console.log('Error: ',err)
    })
    this.setState({ cities })
  }

  addLocation = (location,city) => {
    const index  = this.state.cities.findIndex(item => {
      return item.id === city.id 
    })
    const chosenCity = this.state.cities[index]
    chosenCity.locations.push(location)
    const cities = [
      ...this.state.cities.slice(0,index),
      chosenCity,
      ...this.state.cities.slice( index + 1 )
    ]
    this.setState({
      cities
    },() => {
      AsyncStorage.setItem(key,JSON.stringify(cities))
      .then(() => console.log('Item Stored'))
      .catch(err => {
        console.log('Error: ',err)
      })
    })

  }

  render() {
    return (
      <Tabs
      screenProps = {{
        cities : this.state.cities,
        addCity : this.addCity
      }}
      />
    );
  }
}


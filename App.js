import React from 'react';
import ZipCodeScreen from './components/ZipCodeScreen';
import WeatherScreen from './components/WeatherScreen';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
}, 
  {
    initialRouteName: 'Weather',
    initialRouteParams: {zipCode: '90110'}
  })
export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
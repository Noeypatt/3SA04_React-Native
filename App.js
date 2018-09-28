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
  })
export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
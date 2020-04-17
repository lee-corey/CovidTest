/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Image, Dimensions, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import First from './src/first';
import Second from './src/second';
import Video from './src/video';
const {width, height} = Dimensions.get('screen');
const splash = require('./asset/app-covid-19-splash-screen.png');

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => props.navigation.navigate('First'), 3000);
  }
  render() {
    return (
      <View>
        <StatusBar hidden />

        <Image source={splash} resizeMode="contain" style={{width, height}} />
      </View>
    );
  }
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Video" component={Video} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

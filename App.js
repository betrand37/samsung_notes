import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from './screens/HomeScreen';
import TextScreen from './screens/TextScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Text" component={TextScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={{flex:1}}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </View>
  );
}
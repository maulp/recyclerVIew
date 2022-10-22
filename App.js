import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './navigation/Home';
import About from './navigation/About';
import Details from './navigation/Details';
import End from './navigation/End';
import More from './navigation/More';

function HomeScreen(){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="More" component={More}/>
        <Stack.Screen name="End" component={End}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App; 
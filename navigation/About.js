import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({navigation}) => {
    return (
        <View>
            <Text>About Screen</Text>

            <Button title='Go To Details'
            onPress={()=>navigation.navigate('Details')} color='#09A6F3'/>

            <Button title='Go To More Screen'
            onPress={()=>navigation.navigate('More')} color='#0C63E7'/>
            
            <Button title='Go To End Screen'
            onPress={()=>navigation.navigate('End')} color='#0D41E1'/>

            <Button title='Go To Home Screen'
            onPress={()=>navigation.navigate('Home')} color='#0008C1'/>
        </View>
    );
}

export default About;
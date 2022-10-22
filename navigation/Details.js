import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Style} from '../style';

const Details = ({navigation}) => {
    return(
        <View>
            <Text>Details Screen</Text>
            <Button title='Go To More Screen'
            onPress={()=>navigation.navigate('More')} color='#0C63E7'/>
            
            <Button title='Go To End Screen'
            onPress={()=>navigation.navigate('End')} color='#0D41E1'/>

            <Button title='Go To Home Screen'
            onPress={()=>navigation.navigate('Home')} color='#0008C1'/>

            <Button title='Go To About'
            onPress={()=>navigation.navigate('About')} color='#07C8F9'/>
        </View>
    );
}

export default Details;
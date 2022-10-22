import * as React  from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import {Style} from '../style';


const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Go To About'
            onPress={()=>navigation.navigate('About')} color='#07C8F9'/>

            <Button title='Go To Details'
            onPress={()=>navigation.navigate('Details')} color='#09A6F3'/>

            <Button title='Go To More Screen'
            onPress={()=>navigation.navigate('More')} color='#0C63E7'/>
            
            <Button title='Go To End Screen'
            onPress={()=>navigation.navigate('End')} color='#0D41E1'/>
        </View>
    );
}

export default Home;
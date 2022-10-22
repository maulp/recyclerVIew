import * as React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const End = ({navigation}) => {
    return (
        <View>
            <Text>EndScreen</Text>
            
            <Button title='Go To Home Screen'
            onPress={()=>navigation.navigate('Home')} color='#0008C1'/>

            <Button title='Go To About'
            onPress={()=>navigation.navigate('About')} color='#07C8F9'/>

            <Button title='Go To Details'
            onPress={()=>navigation.navigate('Details')} color='#09A6F3'/>

            <Button title='Go To More Screen'
            onPress={()=>navigation.navigate('More')} color='#0C63E7'/>
        </View>
    );
}

export default End;
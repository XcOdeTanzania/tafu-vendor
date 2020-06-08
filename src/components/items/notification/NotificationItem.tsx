import React from 'react'
import styles from "./styles";
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface NotificationItemProps {

}

export const NotificationItem: React.FC<NotificationItemProps> = ({}) => {
    return (
        <View style={styles.row}>
            <View style={styles.image}>
                <Ionicons name='ios-clock' color="#f58634" size={40}></Ionicons>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>00:10 pm</Text>
                <Text style={styles.subtitle}>Samsung TV</Text>
            </View>
            <View style={styles.column}>
               
                <Button type="outline" buttonStyle={styles.button} onPress={() => {
                    console.log('hello');
                }} title='Confirm' titleStyle={styles.fonts}></Button>
            </View>

        </View>
    );
}
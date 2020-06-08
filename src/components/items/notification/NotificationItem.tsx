import React from 'react'
import styles from "./styles";
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface NotificationItemProps {

}

export const NotificationItem: React.FC<NotificationItemProps> = ({ }) => {
    return (
        <View style={styles.row}>
            <View style={styles.image}>
                <Ionicons name='ios-notifications' color="#f58634" size={40}></Ionicons>
            </View>
            <View style={styles.body}>

                <Text style={styles.subtitle}>Dispatch Order</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.title}>00:10 pm</Text>
            </View>

        </View>
    );
}
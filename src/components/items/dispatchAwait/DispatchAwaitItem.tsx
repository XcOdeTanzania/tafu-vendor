
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Button, Avatar } from 'react-native-elements';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {

}

type DispatchAwaitItemState = {
    visible: boolean,

}
export class DispatchAwaitItem extends Component<Props, DispatchAwaitItemState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            visible: false,

        }
    }
    render() {
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
}

export default DispatchAwaitItem;
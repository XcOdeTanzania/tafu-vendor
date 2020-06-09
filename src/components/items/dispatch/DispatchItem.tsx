
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Button, Avatar, Card } from 'react-native-elements';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {

}

type DispatchItemState = {
    visible: boolean,

}
export class DispatchItem extends Component<Props, DispatchItemState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            visible: false,

        }
    }
    render() {
        return (
            <Card containerStyle={{padding: 0}}>
                <View style={styles.row}>
                    <View style={styles.image}>
                        <Icon name='checkcircleo' color="green" size={40}></Icon>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.subtitle}>Samsung TV</Text>
                    </View>
                    <View style={styles.column}>

                        <Button type="clear" onPress={() => {
                            console.log('hello');
                        }}
                            icon={
                                <Ionicons
                                    name="ios-more"
                                    size={30}
                                    color="black"
                                />
                            }

                        ></Button>
                    </View>

                </View>

            </Card>
        );
    }
}

export default DispatchItem;
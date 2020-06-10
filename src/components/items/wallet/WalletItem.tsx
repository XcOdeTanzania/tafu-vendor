
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Button, Avatar, Card } from 'react-native-elements';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {

}

type WalletItemState = {
    visible: boolean,

}
export class WalletItem extends Component<Props, WalletItemState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            visible: false,

        }
    }
    render() {
        return (
            <Card containerStyle={{ padding: 0, paddingBottom: 10, paddingTop: 10 }}>
                <View style={styles.row}>

                    <View style={styles.body}>
                        <Text style={styles.subtitle}>Samsung TV</Text>
                    </View>
                    <View style={styles.column}>

                        <View style={styles.body}>
                            <Text style={styles.price}>TZS 2,000,000</Text>
                        </View>
                    </View>

                </View>

            </Card>
        );
    }
}

export default WalletItem;
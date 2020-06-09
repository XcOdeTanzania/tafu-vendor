import styles from "./styles";
import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Button, Avatar } from 'react-native-elements';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

interface Props {

}

type ProfileItemState = {
    visible: boolean,

}
export class ProfileItem extends Component<Props, ProfileItemState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            visible: false,

        }
    }
    render() {
        return (
            <View style={styles.row}>
                <View style={styles.body}>
                    <Text style={styles.title}>Laptop City</Text>
                    <Text style={styles.subtitle}>Kinondoni Morocco</Text>
                    <Button buttonStyle={styles.button} onPress={() => {
                        console.log(this.state.visible);
                        this.setState({ visible: true });
                    }} title='Edit' titleStyle={styles.fonts}></Button>
                </View>

                <View>
                    <Avatar
                        size="large"
                        rounded
                        title="LC"
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                </View>

                <Dialog visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({ visible: false })
                    }}
                >
                    <DialogContent>
                        <Text>Hello</Text>
                    </DialogContent>

                </Dialog>

            </View>
        );
    }
}

export default ProfileItem;
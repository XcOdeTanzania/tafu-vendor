import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { TextInput } from "react-native-gesture-handler";
// import strings from "./strings";

interface Props {
  navigation: any,
}

type PaymentScreenState =
  {


    visiblePopup: boolean,
    popupTitle: string
  }


class PaymentScreen extends Component<Props, PaymentScreenState>{

  constructor(props: Props) {
    super(props);

    this.state = {
      visiblePopup: false,
      popupTitle: ''
    }

  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.itemText}>Direct Pay Online Payment Form</Text>

        <Button
          title="Done"
          type="outline"
          buttonStyle={styles.button}
          titleStyle={styles.fonts}
          onPress={() => {
            this.setState({
              visiblePopup: true
            })
          }}
        />

        <Dialog visible={this.state.visiblePopup}
          onTouchOutside={() => {
            this.setState({
              visiblePopup: false

            });

          }}
          width={0.8}
          // height={0.5}
          dialogStyle={{ backgroundColor: "#f58634" }}
        >
          <DialogContent>
            <View>
              <View style={styles.dialogHeader}>
                <Text style={styles.dialogHeaderTitle}>Money Sent</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.dialogContentText}> TZS 9,000,000 is successfully transfered from your Tafu Wallet to your bank Account</Text>
              </View>

              <View>
                <Button onPress={() => {
                  console.log('submit')
                  this.setState({
                    visiblePopup: false

                  });

                }}
                  title="OK !"
                  type="outline"
                  titleStyle={styles.dialogButtonfonts}
                  buttonStyle={[styles.dialogFooterButton, styles.formGroup]}

                ></Button>
              </View>
            </View>
          </DialogContent>

        </Dialog>
      </View>

    );
  }
}

export default PaymentScreen;
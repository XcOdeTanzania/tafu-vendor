// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Switch } from "react-native";
import { Divider, Avatar, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import Dialog, { DialogContent } from "react-native-popup-dialog";



interface Props {
  navigation: any,
}

type AccountScreenState =
  {
    visiblePopup: boolean,
    popupTitle: string
  }
class AccountScreen extends Component<Props, AccountScreenState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      visiblePopup: false,
      popupTitle: ''
    }

  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.body}>
            <Text style={styles.title}>Laptop City</Text>
            <Text style={styles.subtitle}>Kinondoni Morocco</Text>
            <Button
              buttonStyle={styles.buttonAdd}
              title="Edit"
              onPress={() => {
                this.setState({
                  visiblePopup: true,
                  popupTitle: 'Edit Branch'
                });
              }}
            />

          </View>
          <View>

            <TouchableOpacity
              onPress={() => console.log('yrsss')
              }>
              <Avatar
                size="large"
                rounded
                title="LC"
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />

            </TouchableOpacity>

          </View>
        </View>

        <Divider></Divider>
        <View style={{ padding: 20 }}></View>

        <View style={styles.column}>
          <Text style={styles.itemText} >Physical Address</Text>
          <Text style={styles.subtitle}>Kinondoni Morocco, Dar Es Salaam</Text>
        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>

        <View style={styles.column}>
          <Text style={styles.itemText} >Phone Number</Text>
          <Text style={styles.subtitle}>+25 22 234 232</Text>
          <Text style={styles.subtitle}>+25 22 234 232</Text>
        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>


        <View style={styles.column}>
          <Text style={styles.itemText} >Email</Text>
          <Text style={styles.subtitle}>info@laptopcity.co.tz</Text>
        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>
        <View style={styles.row}>
          <Text style={styles.itemText} >Branch</Text>
          <Button
            buttonStyle={styles.buttonAdd}
            title="Add"
            onPress={() => {
              this.setState({
                visiblePopup: true,
                popupTitle: 'Add New Branch'
              });
            }}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowBranch}>
            <Icon name='code-branch' size={25} color='#f58634'></Icon>
            <View style={{ paddingLeft: 10 }}></View>
            <Text style={styles.itemTextBranch} >Kinondoni</Text>
          </View>
          <Button
            buttonStyle={styles.buttonAdd}
            title="Switch Branch"
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowBranch}>
            <Icon name='code-branch' size={25} color='#f58634'></Icon>
            <View style={{ paddingLeft: 10 }}></View>
            <Text style={styles.itemTextBranch} >Posta</Text>
          </View>
          <Button
            buttonStyle={styles.buttonAdd}
            title="Switch Branch"
          />
        </View>




        <View style={styles.divider}>
          <Divider ></Divider>
        </View>



        <Dialog visible={this.state.visiblePopup}
          onTouchOutside={() => {
            this.setState({ visiblePopup: false });

          }}
          width={0.8}
          // height={0.5}
          dialogStyle={{ backgroundColor: "#f58634" }}
          >
          <DialogContent>
            <View>
              <View style={styles.dialogHeader}>
                <Text style={styles.dialogHeaderTitle}>{this.state.popupTitle}</Text>
              </View>
              <View style={styles.formGroup}>
                <TextInput
                  placeholderTextColor="white"
                  placeholder='Location'
                  autoFocus={true}
                  style={styles.textInputPopup}
                ></TextInput>
              </View>
              <View style={styles.formGroup}>
                <TextInput
                  placeholderTextColor="white"
                  placeholder='Phone Number'
                  autoFocus={true}
                  style={styles.textInputPopup}
                ></TextInput>
              </View>
              <View>
                <Button onPress={() => {
                  console.log('submit')
                }}
                  title="Add"
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

export default AccountScreen;
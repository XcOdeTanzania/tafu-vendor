// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import { Button, Input, colors } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation: any,
}

type LoginScreenState =
  {
    username: string,
    password: string,
    email: string
  }
class LoginScreen extends Component<Props, LoginScreenState> {
  static navigationOptions = {
    header: null,
  }
  constructor(props: Props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }

  go = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true) {
      alert('valid');
    }
    else {
      alert();
    }

  }

  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>SIGN IN</Text>
        <Input
          placeholder='Email'
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
          onChangeText={value => this.setState({ username: value })}
          inputContainerStyle={styles.input}
          inputStyle={styles.placeholder}
        />
        <Input
          style={[styles.input]}
          placeholder="Password"

          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => this.setState({ password: value })}
          inputContainerStyle={styles.input}
          inputStyle={styles.placeholder}
          labelStyle={styles.label}

          secureTextEntry={true} />
        <Button

          titleStyle={styles.fonts}

          buttonStyle={styles.button} onPress={() => {
            this.onLogin.bind(this)

          }} title='Login'

        ></Button>

      </View>
    );
  }
}

export default LoginScreen;
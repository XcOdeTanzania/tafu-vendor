// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { validateAll } from 'indicative/validator';
import { Text, View } from "react-native";
import { Button, Input, colors, Card } from "react-native-elements";

import Icon from 'react-native-vector-icons/FontAwesome';

import { AuthContext } from '../../utils/authContext';
import AppInterface from '../../utils/appInterface';





interface Props {
  navigation: any,
}


class LoginScreen extends Component<Props, AppInterface> {
  static navigationOptions = {
    header: null,
  }


  constructor(props: Props) {
    super(props);

    this.state = {
      emailAddress: '',
      password: '',
      SignInErrors: '',
      userToken: null,
      isLoading: false,
      isSignout: true


    };
  }


  handleSignIn = () => {
    // https://indicative.adonisjs.com
    const rules = {
      email: 'required|email',
      password: 'required|string|min:6|max:40'
    };

    const data = {
      email: this.state.emailAddress,
      password: this.state.password
    };



    const messages = {
      required: (field: string) => `${field} is required`,
      'username.alpha': 'Username contains unallowed characters',
      'email.email': 'Please enter a valid email address',
      'password.min': 'Wrong Password?'
    };

    validateAll(data, rules, messages)
      .then(() => {
        console.log('success sign in');
        const email: string = this.state.emailAddress;
        const password: string = this.state.emailAddress;
        this.setState({ userToken: "token"});


      })
      .catch(err => {

        const formatError: any = {};
        err.forEach((err: any) => {
          formatError[err.field] = err.message;
        });
        console.log(formatError);
        this.setState({ SignInErrors: formatError });
      });
  };

  resetPassword = () => { };
  render() {
    console.log(this.state);
    return (
      <AuthContext.Provider value={this.state}>

        {/* {this.props.children} */}
        <View style={styles.container}>
          <Text style={styles.header}>SIGN IN</Text>
          <View>
            <Card>
              <Input
                label={'Email'}
                placeholder="Email"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                value={this.state.emailAddress}
                onChangeText={value => this.setState({ emailAddress: value })}
                errorStyle={{ color: 'red' }}
                errorMessage={this.state.SignInErrors ? this.state.SignInErrors.email : null}
              />
              <Input
                placeholder="Password"
                value={this.state.password}
                onChangeText={value => this.setState({ password: value })}
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry
                errorStyle={{ color: 'red' }}
                errorMessage={this.state.SignInErrors ? this.state.SignInErrors.password : null}
              />
              <Button

                title="Sign in"
                titleStyle={styles.fonts}
                buttonStyle={styles.button}
                onPress={() => this.handleSignIn()}
              />
              <Text style={{ marginLeft: 100 }} onPress={() => this.resetPassword()}>
                Forget Password? Reset
              </Text>
            </Card>
          </View>

        </View>


      </AuthContext.Provider >

    )
  }
}

export default LoginScreen;
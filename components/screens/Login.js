import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  signin() {
    alert("Signin")
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={{ width: 300 }}>
          <View style={styles.viewImg}>
            <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/95/bb/5b/95bb5be4f09440448f990752e0aa62e6--plumbing-logo-logo-water.jpg' }} />
          </View>
          <View>
            <TextInput placeholder="Email" onChangeText={(text) => this.setState({ email: text })} />
            <TextInput placeholder="Password" onChangeText={(text) => this.setState({ password: text })} />
            <Button color="#0099e6" title="Signin" onPress={() => this.signin()} />
          </View>
          <View>
            <Text style={{ textAlign: "center" }} >or</Text>
            <View>
              <Text style={styles.registertext}>Create an account if you dont have an </Text>
              <TouchableOpacity onPress={() => navigate('Register')}><Text style={styles.registeraccount}>account</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewImg: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  img: {
    height: 100,
    width: 100,
  },

  registertext: {
    fontSize: 12,
    textAlign: "center"
  },

  registeraccount: {
    fontSize: 12,
    textAlign: "center",
    textDecorationLine: "underline"
  }
})
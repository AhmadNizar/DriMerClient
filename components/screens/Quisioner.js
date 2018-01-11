import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default class Quisioner extends React.Component {
  static navigationOptions = {
    title: "Questionnaire"
  }
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Questioner</Text>
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
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, TouchableOpacity, Picker } from "react-native";


export default class Register extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#F5FCFF'
    },
    title: "Register",
  }
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      age: '',
      gender: '',
      isDateTimePicker: false
    }
  }

  register() {
    alert("Register")
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 300 }}>
          <TextInput placeholder="Name" onChangeText={(text) => this.setState({ name: text })} />
          <TextInput placeholder="Email" onChangeText={(text) => this.setState({ email: text })} />
          <View style={styles.input}>
            <Picker
              selectedValue={this.state.gender}
              onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Male" value="Male" />
            </Picker>
          </View>
          <TextInput placeholder="Password" onChangeText={(text) => this.setState({ password: text })} />
          <TextInput placeholder="Confirm Password" onChangeText={(text) => this.setState({ age: text })} />
          <Button color="#0099e6" title="Register" onPress={() => this.register()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  input: {
    borderBottomWidth: 0.3,
  }
})
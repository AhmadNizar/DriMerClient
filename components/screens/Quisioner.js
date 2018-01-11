import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { Slider } from 'react-native-elements'

export default class Quisioner extends React.Component {
  static navigationOptions = {
    title: "Questionnaire"
  }
  constructor() {
    super()

    this.state = {
      sleepTime: '',
      activityTime: '',
      sportTime: 0
    }
  }

  getQuisioner() {
    alert("Submit quisioner")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInput}>
          <Text>Berapa lama waktu tidur Anda?</Text>
          <TextInput placeholder="in hour" />
          <Text>Berapa lama waktu aktivitas Anda?</Text>
          <TextInput placeholder="in hour" />
          <Text>Berapa sering Anda berolahraga?</Text>
          <View style={styles.slider}>
            <Text>Low</Text>
            <Text>Medium</Text>
            <Text>High</Text>
          </View>
          <Slider
            thumbTintColor='#1ab2ff'
            minimumValue={0}
            maximumValue={2}
            step={1}
            value={this.state.sportTime}
            onValueChange={(value) => this.setState({ sportTime: value })} />
        </View>
        <Button title="Submit" onPress={this.getQuisioner} />

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
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    paddingTop: 30
  },
  img: {
    height: 100,
    width: 100,
  },
  textInput: {
    width: 300
  },
  slider: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10
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
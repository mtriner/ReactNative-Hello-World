import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

/* const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, World!</Text>
      </View>
  )
}
export default HelloWorldApp; */

/* const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (props) => {
  return (
    <View stlye = {styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style = {[styles.center, {top:50}]}>
      <Greeting name = 'Rexxar'/>
      <Greeting name = 'Jaina'/>
      <Greeting name = 'Sylvanas'/>
    </View>
  )
}

export default LotsOfGreetings; */

class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity
          style = {styles.button}
          onPress = {this.onPress}
        >
          <Text>Tap me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You tapped {this.state.count} times
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;
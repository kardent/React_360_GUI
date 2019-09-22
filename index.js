import React from 'react';
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'


const InputModule = NativeModules.InputModule;

export default class React_360_GUI extends React.Component {
  constructor() {
    super();

    this.state = {
      batteryLevel: 0,
      inputs: "",

      positionX: 0,
      positionY: 0,
      positionZ: -120,

      positionRX: 0,
      positionRY: 0,
      positionRZ: 0,
    }
    
  }
  
  componentDidMount() {
    // Position
    RCTDeviceEventEmitter.addListener('inputSubmit-x', (event) => {
      event = parseInt(event);
      this.setState({positionX: event})
    })
    RCTDeviceEventEmitter.addListener('inputSubmit-y', (event) => {
      event = parseInt(event);
      this.setState({positionY: event})
    })    
    RCTDeviceEventEmitter.addListener('inputSubmit-z', (event) => {
      event = parseInt(event);
      this.setState({positionZ: event})
    })

    // Rotation    
    RCTDeviceEventEmitter.addListener('inputSubmit-rx', (event) => {
      event = parseInt(event);
      this.setState({positionRX: event})
    })  
    RCTDeviceEventEmitter.addListener('inputSubmit-ry', (event) => {
      event = parseInt(event);
      this.setState({positionRY: event})
    })  
    RCTDeviceEventEmitter.addListener('inputSubmit-rz', (event) => {
      event = parseInt(event);
      this.setState({positionRZ: event})
    })
  }

  render() {
    const {batteryLevel, inputs} = this.state;

    let greetingBox = {
      padding: 5,
      backgroundColor: '#000000',
      borderColor: '#639dda',
      borderWidth: 2,
  
      position: 'absolute',
      // 'transform' is evaluated last-to-first - this rotates before translating
      transform: [
        {translateX: this.state.positionX},
        {translateY: this.state.positionY},
        {translateZ: this.state.positionZ},
        
        {rotateX: this.state.positionRX},
        {rotateY: this.state.positionRY},
        {rotateZ: this.state.positionRZ},
      ]
    }

    return (
      // <View style={styles.panel}>
        <View style={greetingBox}>
          {/* <VrButton> POOP </VrButton> */}
          {this.positionRZ}
        </View>
      // </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('React_360_GUI', () => React_360_GUI);

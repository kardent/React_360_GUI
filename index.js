import React from 'react';
import {
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  Image,
  View,
  VrButton,
} from 'react-360';

import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'


const InputModule = NativeModules.InputModule;

export default class React_360_GUI extends React.Component {
  constructor() {
    super();

    this.state = {
      inputs: "",
      model: true,

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
    RCTDeviceEventEmitter.addListener('inputSubmit-model', (event) => {
      event = (event == "true");
      this.setState({model: event})
    })
  }

  render() {

    let popup = {
      borderColor: '#242324',
      borderWidth: 1,
      width: 44,
      height: 44,
      backgroundColor: '#242324',
      borderRadius: 25,
      layoutOrigin: [0, 0],
  
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
      
        <VrButton style={popup}>
          <Image source={{uri: 'static_assets/photo.png'}} style={styles.iconStyle}></Image>
        </VrButton>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    layoutOrigin: [0, 0],
  },

  iconStyle: {
    layoutOrigin: [0,0],
    width: 40,
    height: 40,
    margin: 1,
  },
});

AppRegistry.registerComponent('React_360_GUI', () => React_360_GUI);

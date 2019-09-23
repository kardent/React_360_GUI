// Copyright 2004-present Facebook. All Rights Reserved.

import {Module} from 'react-360-web';

/**
 * Demonstration of a custom Native Module, used to send browser information
 * to the React application.
 */
export default class InputModule extends Module {
  constructor(ctx) {
    super('InputModule');
    this._rnctx = ctx;
    this.userAgent = navigator.userAgent;

    addEventListener('input', function (event) {
        console.log(event.srcElement.type)
        let value = false;

        if(event.srcElement.type == "checkbox"){
          value = true;
        }
        else{
          value = event.target.value;
        }

        ctx.callFunction('RCTDeviceEventEmitter', 'emit', ['inputSubmit-' + event.srcElement.name, value])
    });

}

componentDidMount(){
    
  }  
}
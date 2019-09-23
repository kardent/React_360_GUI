// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';
import InputModule from './InputModule';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      ctx => new InputModule(ctx),
    ],
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToLocation(
    r360.createRoot('React_360_GUI', { /* initial props */ }),
    new Location([0, 0, 0])
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('background.jpg'));

  let i_input = document.getElementById("initial_rotation");
  i_input.addEventListener('input', function (event) {

    let y = event.target.value
    let halfY = y / 2
    r360._cameraQuat[0] = 0
    r360._cameraQuat[1] = Math.sin(halfY)
    r360._cameraQuat[2] = 0
    r360._cameraQuat[3] = Math.cos(halfY)
  });
}

window.React360 = {init};

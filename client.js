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
}

window.React360 = {init};

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry
} from 'react-native';

import { configureStore } from './app/store'
import App from './app/components/App';

export default class codeScanner extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('codeScanner', () => codeScanner);

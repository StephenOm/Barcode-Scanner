import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import { debounce } from 'throttle-debounce';
import Camera from 'react-native-camera';
import { findUpc } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.reading = false;
    this.debouncedUpdateUpc = debounce(1000, true, this.updateUpc);
  }

  updateUpc(data) {
    if(!this.reading) {
      this.reading = true;
      this.props.dispatch(findUpc(data.data));
    }
  }

  componentDidUpdate() {
    if(this.reading) {
      var { product_name, upc } = this.props.upc;
      Alert.alert(
        product_name,
        upc,
        [{text: 'OK', onPress: () => { this.reading = false }}],
        { onDismiss: function(){ this.reading = false }}
      );

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          onBarCodeRead={(data)=> this.debouncedUpdateUpc(data)}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

var mapStateToProps = (state) => {
  return {
    upc: state.upc
  }
}

module.exports = connect(mapStateToProps)(App);

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  imageWrap: {
    flex: 1,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default class FullImageScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    const fullImageUrl = navigation.getParam('fullImageUrl');

    return (
      <View style={styles.imageWrap}>
        <Image source={{uri: fullImageUrl}} style={styles.image} />
      </View>
    );
  }
}

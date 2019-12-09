import React from 'react';
import {Text, StyleSheet} from 'react-native';

import COLORS from '../../colors';

const styles = StyleSheet.create({
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    fontSize: 16,
    marginTop: -10,
    color: COLORS.loading,
  },
});

const WithLoadingIndicator = WrapComponent => {
  return ({isLoading, ...restProps}) => {
    if (!isLoading) {
      return <WrapComponent {...restProps} />;
    }
    return <Text style={styles.loadingIndicator}>Data is loading</Text>;
  };
};

export default WithLoadingIndicator;

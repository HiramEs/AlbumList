import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.mainContainer}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

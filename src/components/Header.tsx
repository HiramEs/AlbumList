import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Music!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width,
    height: 60,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
});

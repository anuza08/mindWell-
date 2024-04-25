import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SlashScrren = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloText: {
    fontSize: 24,
    color: '#333', // Dark gray color for the text
  },
});

export default SlashScrren ;

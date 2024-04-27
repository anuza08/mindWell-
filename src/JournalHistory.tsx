import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const profilebg = require('../asset/userprofile.jpg');

const JournalHistory = () => {
  return (
    <ImageBackground source={profilebg} style={styles.container}>
      <Text style={styles.text}>Your Journal History</Text>
      <View style={styles.rectangle} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'white',
    letterSpacing: 5,
    bottom: '35%',
    right: '3%',
    fontFamily: 'HiMelody-Regular',
  },

  rectangle: {
    width: 70,
    height: 80,
    backgroundColor: '#033C55',
    opacity: 0.5,
    borderRadius: 20,
    position: 'relative',
    bottom: 190,
    right: 130,
  },
});

export default JournalHistory;

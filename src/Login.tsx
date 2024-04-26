import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
const bgImg = require('../asset/loginbg.jpg');

const Login = () => {
  const navigation = useNavigation();
  return (
    // <View style={styles.container}>
    //   <Text style={styles.helloText}>Hello, World!</Text>
    // </View>
    <View style={styles.container}>
      <ImageBackground source={bgImg} style={styles.image} />
      <View>
        <Button
          onPress={() => {
            navigation.navigate('UserProfile');
          }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <Text style={styles.text}>Welcome to Mindwell !!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    color: 'white',
    fontSize: 40,
    top: 50,
    left: 70,
    textAlign: 'center',
    fontFamily: 'HiMelody-Regular',
  },
});

export default Login;

import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const profilebg = require('../asset/userprofile.jpg');
const userImg = require('../asset/Default.png');
const yellowrect = require('../asset/Rectangle80.png');

const UserProfile = () => {
  const handleButtonClick = (buttonName: string) => {
    console.log(`${buttonName} clicked`);
  };

  return (
    <ImageBackground source={profilebg} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Image source={userImg} style={styles.userImage} />
        <TextInput
          style={styles.readOnlyTextField}
          value="User Name"
          editable={false}
        />
        <TextInput
          style={styles.readOnlyTextField}
          value="Email address"
          editable={false}
        />
        <View style={styles.yellowcontainer}>
          <TouchableOpacity
            onPress={() => handleButtonClick('First Button')}
            style={styles.clickableImage}>
            <Image source={yellowrect} style={styles.yellowbtn} />
            <Text style={styles.buttonText}>Click Here</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleButtonClick('Second Button')}
            style={styles.clickableImage}>
            <Image source={yellowrect} style={styles.yellowbtn} />
            <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 250,
  },
  userImage: {
    top: '20%',
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'relative',
  },
  readOnlyTextField: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#8EBAC3',
    color: 'white',
    fontSize: 20,
    borderRadius: 50,
    width: '70%',
    top: '26%',
    textAlign: 'center',
    letterSpacing: 5,
    position: 'relative',
    fontFamily: 'HiMelody-Regular',
  },
  yellowbtn: {
    marginTop: '2%',
    position: 'relative',
  },
  clickableImage: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    position: 'absolute',
    top: '30%',
    left: '17%',
    // textAlign: 'center',
    transform: [{translateX: -25}, {translateY: -10}],
    color: '#5F374B',
    fontSize: 30,
    letterSpacing: 5,
    fontFamily: 'HiMelody-Regular',
  },
  yellowcontainer: {
    top: '30%',
    right: '5%',
  },
});

export default UserProfile;
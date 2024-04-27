import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <ImageBackground
        source={require('../asset/HomeScreenBg.jpeg')}
        style={{width: '100%', height: '100%'}}
      />
      <View style={styles.headerImage}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserProfile');
          }}>
          <Image
            source={require('../asset/Default.png')}
            style={{width: '10%', height: '40%'}}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dottedLine: {
    borderStyle: 'dotted', // Set the border style to dotted
    borderWidth: 1, // Define the border width
    borderColor: 'white', // Set the border color to white
    width: '80%', // Define the width of the dotted line (can be a percentage or absolute value)
  },
  headerImage: {
    bottom: '99%',
     left: '87%'
    },
});

export default HomeScreen;

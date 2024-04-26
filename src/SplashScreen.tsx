import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';



const SplashScreen: React.FC = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <ImageBackground
        source={require('../asset/SplashScreenBackground.jpeg')}
        style={styles.imageBg}
      />
      <View style={{bottom: 590, alignItems: 'center' }}>
        <Image
          source={require('../asset/mindwelllogogif.gif')}
          
        />
        <View style={{alignItems: 'center', marginTop: '15%'}}>
          
        
          <Text style={{color: 'white', fontSize: 40,fontFamily: 'HiMelody-Regular'}}>Welcome to Mindwell</Text>
          
        
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: '60%',
    width: '100%',
  },
  imageBg: {
    width: '100%',
    height: '100%',
  },
  background1: {
    height: '60%',
    width: '100%',
    top: 180,
  },
 
});

export default SplashScreen;

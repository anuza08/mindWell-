import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/HomeScreen';
import UserProfile from '../src/UserProfile';
import HomeComponent from './home';

type BottomTabParamList = {
  HomeScreen: undefined;
  Product: undefined;
  UserProfile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function HomeTabScreen() {
  const isFocused = useIsFocused();
  return (
    
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { height: '55%' },
          tabBarActiveTintColor: 'black', 
          tabBarInactiveTintColor: 'white',
          showLabel: true, 
          style: {
            height: '55%' ,
            backgroundColor: 'white', 
            borderTopWidth: 1, 
            borderTopColor: 'gray', 
          },
          labelStyle: {
            fontSize: 19, // Font size of the tab labels
            fontWeight: 'bold', // Font weight of the tab labels
            position: 'absolute',
          },
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image source={require('../asset/Default.png')}style={{width: size, height: size,}}/>
            ),
            tabBarStyle: isFocused ? { backgroundColor: '#478493' } : {},
          }}
        />
        
        <Tab.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
             <Image source={require('../asset/Default.png')}style={{width: size, height: size,}}/>
            ),
            tabBarStyle: isFocused ? { backgroundColor: '#478493' } : {},
          }}
        />
        
        
      </Tab.Navigator>
    
  );
}

export default HomeTabScreen;

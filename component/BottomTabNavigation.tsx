import React from 'react';
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
          tabBarActiveTintColor: 'white', 
          tabBarInactiveTintColor: 'gray',
          showLabel: true, 
          style: {
            height: '55%' ,
            backgroundColor: '#478493', 
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
              <HomeComponent width={size} height={size} fill={color} />
            ),
            tabBarStyle: isFocused ? { backgroundColor: '#478493' } : {},
          }}
        />
        
        <Tab.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            tabBarLabel: 'Account',
            // tabBarIcon: ({ color, size }) => (
            //   <UserComponent width={size} height={size} fill={color} />
            // ),
            tabBarStyle: isFocused ? { backgroundColor: '#478493' } : {},
          }}
        />
        
        
      </Tab.Navigator>
    
  );
}

export default HomeTabScreen;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import QuestionScreen from './src/QuestionScreen';
import Login from './src/Login';
import UserProfile from './src/UserProfile';

const Stack = createStackNavigator();

function App(): JSX.Element {
  // const handlePress = buttonName => {
  //   Alert.alert(`You pressed the ${buttonName} button`);
  // };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="QuestionScreen"
            component={QuestionScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 18,
    color: '#555',
    marginTop: 100,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSpacing: {
    marginBottom: 20, // Increased spacing between buttons
    borderRadius: 30, // Increased border radius for rounded corners
  },
});

export default App;

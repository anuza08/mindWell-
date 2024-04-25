import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const QuestionScreen = () => {
    const navigation = useNavigation();
    const handlePress = buttonName => {
        
            Alert.alert(`You pressed the ${buttonName} button`);
           
  };
  console.log('hi');
  
  return (
    <View style={styles.container}>
          <View>
          <TouchableOpacity  onPress={() => navigation.navigate("SlashScrren")}>
        <Text style={styles.questionText}>
          How often have you been feeling nervous, anxious, or on edge?
        </Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonSpacing}>
            <Button
              title="Not at all"
              onPress={() => handlePress('Not at all')}
              color="#025F82"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSpacing}>
            <Button
              title="Several days"
              onPress={() => handlePress('Several days')}
              color="#025F82"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSpacing}>
            <Button
              title="More often"
              onPress={() => handlePress('More often')}
              color="#025F82"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSpacing}>
            <Button
              title="Every day"
              onPress={() => handlePress('Every day')}
              color="#025F82"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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

export default QuestionScreen;

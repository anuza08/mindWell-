import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            {/* <ImageBackground source={require('')}/>  */}
            <View>
                <TouchableOpacity onPress={() => {navigation.navigate('UserProfile')}}>
                <Text>Hi</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;
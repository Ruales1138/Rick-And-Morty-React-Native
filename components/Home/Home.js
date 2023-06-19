import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    function test() {
        console.log('Funciona!')
    };

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <StatusBar style="auto" />
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Details');
                }}
            >
                <Image source={{
                      uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{width: 200, height: 200}}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
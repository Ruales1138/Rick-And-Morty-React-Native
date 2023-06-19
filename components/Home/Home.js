import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Carousel from "../Carousel/Carousel";
import styles from "./HomeStyles";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Carousel/>
            <StatusBar style="auto" />
        </View>
    );
};
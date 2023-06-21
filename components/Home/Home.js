import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Carousel from "../Carousel/Carousel";
import styles from "./HomeStyles";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/actions";

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <Carousel data={data}/>
            <StatusBar style="auto" />
        </View>
    );
};
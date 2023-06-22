import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Carousel from "../Carousel/Carousel";
import styles from "./HomeStyles";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/actions";

export default function HomeScreen() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    let images = pushImages();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);
    
    function pushImages() {
        let arrImages = [];
        data.results?.map(e => arrImages.push(e.image));
        return arrImages;
    };

    return (
        <View style={styles.container}>
            <Carousel images={images}/>
            <StatusBar style="auto" />
        </View>
    );
};
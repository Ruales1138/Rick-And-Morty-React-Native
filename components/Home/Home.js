import React, { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Carousel from "../Carousel/Carousel";
import styles from "./HomeStyles";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/actions";

export default function HomeScreen({ navigation }) {
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
            <ScrollView>
                <Carousel images={images}/>
                <View>
                    {data.results?.map(e => {
                        return (
                            <View key={e.id}>
                                <TouchableWithoutFeedback 
                                    onPress={() => {
                                        navigation.navigate('Details' ,{ id: e.id })
                                    }}>
                                    <Image
                                        source={{uri: e.image}} 
                                        style={{width: 150, height: 150}}
                                    />
                                </TouchableWithoutFeedback>
                                <Text style={{fontSize: 30}}>{e.name}</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )
};
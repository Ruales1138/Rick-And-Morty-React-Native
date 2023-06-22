import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDataById } from "../../redux/actions";
import styles from "./DetailStyles";

export default function DetailScreen({ route }) {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);
    const { id } = route.params;

    useEffect(() => {
        dispatch(getDataById(id));
        return function() {
            dispatch(cleanDetail());
        };
    }, [dispatch, id])

    return detail.name? (
        <View style={styles.container}>
            <Text>{detail.name}</Text>
            <Image source={{uri: detail.image}} style={{width: 200, height: 200}}/>
            <Text>Specie:{detail.species}</Text>
            <Text>Gender:{detail.gender}</Text>
            <Text>Origin:{detail.origin?.name}</Text>
        </View>
    ) : (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    )
};
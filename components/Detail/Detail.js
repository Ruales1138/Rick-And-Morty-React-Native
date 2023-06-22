import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDataById } from "../../redux/actions";

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

    return (
        <View style={styles.container}>
            <Text>{detail.name}</Text>
            <Image source={{uri: detail.image}} style={{width: 200, height: 200}}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
import React, { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./CarrouselStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Carousel(props) {
    const IMAGES = [
        'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
    ];
    const navigation = useNavigation();
    const [current, setCurrent] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const TIME = 1500;

    useEffect(() => {
      let intervalId;
      if (isRunning) {
        intervalId = setInterval(playImages, TIME);
      }
      return () => {
        clearInterval(intervalId);
      };
    }, [isRunning, stopImages]);

    function playImages() {
        setCurrent((prevCount) => {
          if (prevCount === 4) return 0;
          else return prevCount + 1;
        });
    };

    function stopImages() {
        setIsRunning(false);
        setTimeout((isRunning) => {
          if(!isRunning) setIsRunning(true);
        }, 5000);
    };

    function nextImage() {
        if(current >= IMAGES.length - 1) setCurrent(0);
        else setCurrent(current + 1);
        stopImages();
    };

    function prevImage() {
        if(current <= 0) setCurrent(IMAGES.length - 1);
        else setCurrent(current - 1);
        stopImages();
    };

    return (
        <View style={styles.container}>
          <View style={styles.horizontalContainer}>

            <TouchableOpacity onPress={prevImage}>
                <Icon name="chevron-left" size={50} color="black" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <Image
                source={{ uri: IMAGES[current] }}
                style={styles.image}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={nextImage}>
                <Icon name="chevron-right" size={50} color="black" />
            </TouchableOpacity>
            
          </View>
        </View>
    );
      
};
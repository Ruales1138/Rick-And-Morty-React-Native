import React, { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Carousel() {
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
    }, [isRunning]);

    function playImages() {
        setCurrent((prevCount) => {
          if (prevCount === 4) return 0;
          else return prevCount + 1;
        });
    };

    function stopImages() {
        setIsRunning(false);
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
        <View>
            <View>
                <Button title="Prev" onPress={prevImage}/>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Image source={{uri: IMAGES[current]}} style={{width: 200, height: 200}}/>
                </TouchableOpacity>
                <Button title="Next" onPress={nextImage}/>
            </View>
        </View>
    )
};
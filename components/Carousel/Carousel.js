import React, { useRef } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Image, Dimensions, SafeAreaView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const CONTAINER_WIDTH = width * 0.7;
const SIDE_SPACE = (width - CONTAINER_WIDTH) / 2;
const SPACE = 10;
const BACKDROP_HEIGHT = height * 0.5;

function BackDrop({ scrollX, images }) {
  return (
    <View
      style={([{
        height: BACKDROP_HEIGHT,
        width,
        position: 'absolute',
        top: 0
      }],
      StyleSheet.absoluteFillObject
      )}
    >
      {images.map((image, index) => {
        const inputRange = [
          (index - 1) * CONTAINER_WIDTH,
          index * CONTAINER_WIDTH,
          (index + 1) * CONTAINER_WIDTH
        ];
        const outputRange = [0, 1, 0];
        const opacity = scrollX.interpolate({ inputRange, outputRange });

        return (
          <Animated.Image
            source={{ uri: image }}
            key={index}
            blurRadius={10}
            style={[{
              height: BACKDROP_HEIGHT,
              width,
              position: 'absolute',
              top: 0,
              opacity
            }]}
          />)
      })}

      <LinearGradient
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          top: 0
        }}
      />
    </View>
  )
};

export default function Carousel({ images }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <BackDrop scrollX={scrollX} images={images}/>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX }}}],
          { useNativeDriver: true }
        )}
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 150, paddingHorizontal: SIDE_SPACE }}
        decelerationRate={0}
        snapToInterval={CONTAINER_WIDTH}
        scrollEventThrottle={16}
        keyExtractor={item => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * CONTAINER_WIDTH,
            index * CONTAINER_WIDTH,
            (index + 1) * CONTAINER_WIDTH
          ];
          const outputRange = [0, -50, 0];
          const translateY = scrollX.interpolate({ inputRange, outputRange })

          return (
            <View style={{ width: CONTAINER_WIDTH }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Details', { id: index + 1 })
                }}
              >
                <Animated.View
                  style={{
                    marginHorizontal: SPACE,
                    padding: SPACE,
                    borderRadius: 34,
                    backgroundColor: '#fff',
                    alignItems: "center",
                    transform: [{ translateY }]
                  }}
                >
                  <Image source={{uri: item}} style={styles.posterImage}/>
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterImage: {
    width: '100%',
    height: CONTAINER_WIDTH * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10
  }
});
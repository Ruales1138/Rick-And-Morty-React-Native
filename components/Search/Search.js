import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './SearchStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Search() {
    const [inputValue, setInputValue] = useState('');
  
    function handleInputChange(text) {
      setInputValue(text);
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su texto"
          onChangeText={handleInputChange}
          value={inputValue}
        />
        <TouchableOpacity style={styles.button}>
            <Icon name="search" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    );
  };

  
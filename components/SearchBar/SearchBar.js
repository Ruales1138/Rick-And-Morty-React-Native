import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './SearchBarStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { getDataByName } from '../../redux/actions';

export default function SearchBar() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
  
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
        <TouchableOpacity
          style={styles.button}
        >
            <Icon name="search" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    );
  };

  
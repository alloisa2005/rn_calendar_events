import { View, TextInput, Button } from 'react-native'
import React from 'react'
import styles from './style';

const Input = ({ placeholder, inputTxt, onChangeText, onPressBtn, buttonTitle }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={inputTxt}
        onChangeText={onChangeText}
      />
      <Button color={"#66B3E1"} title={buttonTitle} onPress={onPressBtn} />
    </View>
  )
}

export default Input


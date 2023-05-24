import { View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { addEvent } from '../../redux/actions/events.action';

const Input = ({ placeholder, buttonTitle }) => {

  const dispatch = useDispatch();
  const [inputTxt, setInputTxt] = useState("");

  const handlerAddEvent = () => {
    const event = {
      id: Math.random().toString(),
      title: inputTxt,
      completed: false
    }
    dispatch(addEvent(event));
    setInputTxt("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={inputTxt}
        onChangeText={ (e) => setInputTxt(e) }
      />
      <Button color={"#66B3E1"} title={buttonTitle} onPress={handlerAddEvent} />
    </View>
  )
}

export default Input


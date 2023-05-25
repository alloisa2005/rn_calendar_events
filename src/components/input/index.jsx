import { View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addEventAsync } from '../../redux/actions/events.action';

const Input = ({ placeholder, buttonTitle }) => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.events.loading);

  const [inputTxt, setInputTxt] = useState("");

  const handlerAddEvent = () => {
    if(inputTxt.trim() === "") return;

    const event = {      
      title: inputTxt,
      completed: false
    }
    dispatch( addEventAsync(event) );
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
      <Button disabled={loading} color={"#66B3E1"} title={buttonTitle} onPress={handlerAddEvent} />
    </View>
  )
}

export default Input


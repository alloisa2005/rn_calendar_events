import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Entypo, FontAwesome5 } from '@expo/vector-icons'; 

import { useDispatch } from 'react-redux';
import { deleteEventAsync, selectEvent } from '../../redux/actions/events.action';

const ListItem = ({ item }) => {

  const dispatch = useDispatch();

  const handleDeleteEvent = (id) => {
    dispatch( deleteEventAsync(id) );
  }

  const handleSelectEvent = (item) => {     
    dispatch( selectEvent(item) );
  }

  return (
    <View
      style={[styles.eventItem, {backgroundColor: item.completed ? 'red' : '#66B3E1'}]} >
      <Text style={styles.eventItemTitle}>{item.title} {item.completed ? '- Completada': ''}</Text>
      <View style={styles.iconContainer}>
        <Entypo name="eye" size={26} color="white" onPress={ () => handleSelectEvent(item) } />
        <Entypo name="trash" size={22} color="white" onPress={ () => handleDeleteEvent(item.id) } />
      </View>
    </View>
  )
}

export default ListItem
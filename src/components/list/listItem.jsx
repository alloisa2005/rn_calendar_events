import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../redux/actions/events.action';

const ListItem = ({onPressItem, item, completeEvent}) => {

  const dispatch = useDispatch();

  const handleDeleteEvent = (id) => {
    dispatch( deleteEvent(id) );
  }

  return (
    <View
      style={[styles.eventItem, {backgroundColor: item.completed ? 'red' : '#66B3E1'}]}
      onPress={() => onPressItem(item.id)}    
      //onLongPress={() => completeEvent(item.id)}        
    >
      <Text style={styles.eventItemTitle}>{item.title} {item.completed ? '- Completada': ''}</Text>
      <Entypo name="trash" size={22} color="white" onPress={ () => handleDeleteEvent(item.id) } />
    </View>
  )
}

export default ListItem
import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const ListItem = ({onPressItem, item, completeEvent}) => {
  return (
    <TouchableOpacity
      style={[styles.eventItem, {backgroundColor: item.completed ? 'red' : '#66B3E1'}]}
      onPress={() => onPressItem(item.id)}    
      onLongPress={() => completeEvent(item.id)}        
    >
      <Text style={styles.eventItemTitle}>{item.value} {item.completed ? '- Completada': ''}</Text>
    </TouchableOpacity>
  )
}

export default ListItem
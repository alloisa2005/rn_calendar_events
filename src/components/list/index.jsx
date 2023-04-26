import { FlatList } from 'react-native'
import React from 'react'
import ListItem  from './listItem.jsx'

const MyList = ({eventList, onPressItem, completeEvent}) => {
  return (
    <FlatList
      data={eventList}
      renderItem={({ item }) => (
        <ListItem item={item} onPressItem={onPressItem} completeEvent={completeEvent} />                
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

export default MyList
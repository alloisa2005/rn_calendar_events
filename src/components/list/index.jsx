import { FlatList } from 'react-native'
import React from 'react'
import ListItem  from './listItem.jsx'
import { useSelector} from "react-redux";

const MyList = ({onPressItem, completeEvent}) => {

  const events = useSelector((state) => state.events.events);  
  
  return (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <ListItem item={item} />                
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

export default MyList
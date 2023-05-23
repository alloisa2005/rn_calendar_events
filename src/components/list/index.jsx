import { FlatList } from 'react-native'
import React from 'react'
import ListItem  from './listItem.jsx'
import { useSelector} from "react-redux";

const MyList = ({onPressItem, completeEvent}) => {

  const todos = useSelector((state) => state.events.todos);

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <ListItem item={item} onPressItem={onPressItem} completeEvent={completeEvent} />                
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

export default MyList
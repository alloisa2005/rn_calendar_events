import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { styles } from './styles';
import Input from '../input';
import MyList from '../list';
import MiModal from '../modal';

const Home = () => {

  const events = useSelector((state) => state.events.events);

  const [inputTxt, setInputTxt] = useState("");
  const [eventList, setEventList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  const handleChangeTxt = (val) => setInputTxt(val);

  const handleAddEvent = () => {
    if (inputTxt.length === 0) return;

    setEventList((prevEvent) => [
      ...eventList,
      { id: Math.random().toString(), value: inputTxt, completed: false },
    ]);
    setInputTxt("");
  };

  const onPressItem = (id) => {
    setModalVisible(!modalVisible);
    let selected = eventList.find((el) => el.id === id);
    setSelectedEvent(selected);
  };

  const deleteEvent = (id) => {
    let events = eventList.filter((el) => el.id !== id);
    setEventList(events);
    setSelectedEvent({});
    setModalVisible(!modalVisible);
  };

  const completeEvent = (id) => {
    let tempEventList = [...eventList];
    let selected = tempEventList.find((el) => el.id === id);
    selected.completed = !selected.completed;
    setEventList(tempEventList);
  };

  return (
    <View style={styles.container}>
        <Input
          placeholder="Ingresa un evento"
          buttonTitle="Add"
          inputTxt={inputTxt}
          onChangeText={handleChangeTxt}
          onPressBtn={handleAddEvent}
        />

        <Text style={styles.texto}>
          {events.length === 0
            ? `No tengo eventos programados`
            : events.length === 1
            ? `Tengo ${events.length} evento programado`
            : `Tengo ${events.length} eventos programados`}
        </Text>

        <View style={styles.listaContainer}>
          <MyList            
            onPressItem={onPressItem}
            completeEvent={completeEvent}
          />
        </View>

        <MiModal
          animationType="fade"
          title="¿Está seguro que desea eliminar el evento?"
          modalVisible={modalVisible}
          selectedEvent={selectedEvent}
          btnOk={() => deleteEvent(selectedEvent.id)}
          btnCancel={() => setModalVisible(!modalVisible)}
        />        
      </View>
  )
}

export default Home



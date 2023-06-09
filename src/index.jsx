import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text  
} from "react-native";

import { Input, MiModal, MyList } from "./components";
import { Provider } from "react-redux";
import { useSelector} from "react-redux";

import store from "./redux/store";

export default function App() {
  //const todos = useSelector((state) => state.events.todos);

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
    <Provider store={store}>
      <View style={styles.container}>
        <Input
          placeholder="Ingresa un evento"
          buttonTitle="Add"
          inputTxt={inputTxt}
          onChangeText={handleChangeTxt}
          onPressBtn={handleAddEvent}
        />

        <Text style={styles.texto}>
          {eventList.length === 0
            ? `No tengo eventos programados`
            : eventList.length === 1
            ? `Tengo ${eventList.length} evento programado`
            : `Tengo ${eventList.length} eventos programados`}
        </Text>

        <View style={styles.listaContainer}>
          <MyList
            //eventList={eventList}
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

        <StatusBar />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },
  texto: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  listaContainer: {
    marginTop: 16,
    flex: 1,
  },
});

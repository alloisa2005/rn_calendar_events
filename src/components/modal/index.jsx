import { View, Text, Modal, Button } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectEvent, updateEventAsync } from '../../redux/actions/events.action';

const MiModal = () => {

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.events.selected);

  return (
    <Modal animationType="fade" visible={selected ? true : false}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selected?.completed ? "¿Cancelar Completado de Evento?" : "¿Desea completar el evento?"}</Text>
            <Text style={styles.modalElement}>{selected?.title}</Text>
            <View style={styles.modalButtonsContainer}>
              <Button
                color={"#66B3E1"}
                title="Atrás"
                onPress={ () => dispatch( selectEvent(null) )}
              />
              <Button
                color={"#66B3E1"}
                title={selected?.completed ? "Confirmar" : "Completar"}
                onPress={ () => dispatch( updateEventAsync({id: selected.id, title: selected.title, completed: !selected.completed}) )}
              />
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default MiModal
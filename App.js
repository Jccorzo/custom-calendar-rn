import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Button
} from "react-native";

import Calendario from './Calendario';

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={()=>setShowCalendar(showCalendar ? false : false)}>
      <View style={styles.centeredView}>
          <Button
          title={'show calendar'}
          onPress={()=>{setShowCalendar(!showCalendar)}}
          />
          {showCalendar ? <Calendario/>:null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;

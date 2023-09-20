import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Avatar } from 'react-native-paper';





const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >

     <View
        style={[
          styles.linhacima
        ]}
      >
        <Text style={{ color: "white" }}></Text>
        <Text style={{ color: "white" }}></Text>
        <Text style={{ color: "white" }}></Text>
      </View>
      
      <View
        style={[
          styles.linhameio
        ]}
      > 
        <Text style={[styles.textolinhameio]}>Conversas</Text>
        <Text style={[styles.textolinhameio]}>Atualizações</Text>
        <Text style={[styles.textolinhameio]}>Chamadas</Text> 
      </View>

      <View style={{ flex: 1, backgroundColor: "white" }} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  linhacima: {
    flex: 0.045,
    backgroundColor: "#054D45",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  linhameio: {
    flex: 0.13,
    backgroundColor: "#065E55",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  textolinhameio: {
    paddingBottom: 20,
    color: 'white',
  }
});



export default Flex;


/*const Flex = () => {
  return (
    <View
    
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 0.045, backgroundColor: '#054D45'}}/> 
      <View style={{flex: 0.16, backgroundColor: '#065E55'}} />
      <View style={{flex: 1, backgroundColor: 'white'}} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})*/
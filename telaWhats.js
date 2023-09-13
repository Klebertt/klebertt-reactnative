import React from 'react';
import {StyleSheet, View, Text} from 'react-native';





const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >

     <View
        style={{
          flex: 0.045,
          backgroundColor: "#054D45",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ color: "white" }}></Text>
        <Text style={{ color: "white" }}></Text>
        <Text style={{ color: "white" }}></Text>
      </View>
      
      <View
        style={{
          flex: 0.16,
          backgroundColor: "#065E55",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ color: "white" }}>Conversas</Text>
        <Text style={{ color: "white" }}>Status</Text>
        <Text style={{ color: "white" }}>Chamadas</Text>
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
});

const linhacima = StyleSheet.create({
  flex: 0.045,
          backgroundColor: "#054D45",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-end",
  },
);

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
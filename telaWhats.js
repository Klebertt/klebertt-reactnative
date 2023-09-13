import React from 'react';
import {StyleSheet, View, Text} from 'react-native';



const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 0.045, backgroundColor: '#054D45'}} />
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
});

export default Flex;
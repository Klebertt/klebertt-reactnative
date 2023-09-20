import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  pessoa: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});



const PESSOAS = [
  {nome: 'Devin', idade: 18},
  {nome: 'Dan', idade: 5},
  {nome: 'Dominic', idade: 40},
  {nome: 'Jackson', idade: 1},
  {nome: 'James', idade: 25},
  {nome: 'Joel', idade: 32},
  {nome: 'John', idade: 65},
  {nome: 'Jillian', idade: 29},
  {nome: 'Jimmy', idade: 39},
  {nome: 'Julie', idade: 48},
];
const Pessoa = ({nome, idade}) => {
  const texto = (idade === 1) ? "ano" : "anos"
return (
  <View style={styles.pessoa}>
  <Text styles={styles.item}> {nome.toUpperCase()} </Text>
  <Text styles={styles.item}> {idade} anos </Text>
  </View>
  )
}

const FlatListBasics = () => {
  return(
    <View style={styles.container}>
      <FlatList
      data={PESSOAS}
      renderItem={({item}) => <Pessoa nome={item.nome} idade={item.idade}/>}
      /></View>

  )
}

//export default FlatListBasics;
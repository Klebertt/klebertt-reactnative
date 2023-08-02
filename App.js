import {Text, View} from 'react-native'

const MyApp = () => {
  return (
    <>
  <View>
    <Text>ABC</Text> 
    <Text>A</Text>
    </View> 
    <Gato nome = "Sparks" idade = {2}/>
    <Gato nome = "Garfield" idade={4}/>
    <Gato nome = "Marie" idade = {7}/>
    </>
    )
}


const Gato = ({nome, idade}) => {
  return (
    <Text>Meu nome é {nome.toUpperCase()} e eu tenho {idade} anos.</Text>
  )
}

export default MyApp
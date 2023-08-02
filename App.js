import {Text, View} from 'react-native'

const MyApp = () => {
  return (
    <>
  <View>
    <Text>ABC</Text> 
    <Text>A</Text>
    </View> 
    <Gato nome = "Sparks"/>
    <Gato nome = "Garfield"/>
    <Gato nome = "Marie"/>
    </>
    )
}


const Gato = (props) => {
  return (
    <Text>meu nome é {props.nome.toUpperCase()}.</Text>
  )
}

export default MyApp
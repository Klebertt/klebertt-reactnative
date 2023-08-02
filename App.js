import {Text, View} from 'react-native'

const MyApp = () => {
  return (
    <>
  <View>
    <Text>ABC</Text> 
    <Text>A</Text>
    </View> 
    <Gato/>
    <Gato/>
    </>
    )
}


const Gato = () => {
  return (
    <Text>gato(a)</Text>
  )
}

export default MyApp
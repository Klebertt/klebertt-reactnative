import {Text, View} from 'react-native'

const MyApp = () => {
  return (
    <>
  <View>
    <Text>ABC</Text> 
    <Text>A</Text>
    </View> 
    <Gato/>
    </>
    )
}



const Gato = () => {
  return (
    <Text>GATOGATO</Text>
  )
}

export default MyApp
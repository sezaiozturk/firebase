import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';

const App = () => {
  const reference = database().ref('stundent/');
  const saveData = () => {
    reference.push({
      name: 'Sezai',
      age: '24'
    })
  }
  const getData = () => {
    reference.on('value', res => {
      console.log(res.val());
    })
  }
  return (
    <SafeAreaView>
      <Button title='save data' onPress={saveData} />
      <Button title='get data' onPress={getData} />
    </SafeAreaView>
  )
}

export default App
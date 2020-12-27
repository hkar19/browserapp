import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CustomSafeAreaView from '../../components/CustomSafeAreaView'

const Settings = (props) => {
  return (
    <CustomSafeAreaView style={styles.viewCenter}>
      <View style={styles.textView}>
        <Text>Settings</Text>
      </View>
    </CustomSafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewCenter:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textView:{
    flex:1,
  }
})

export default Settings

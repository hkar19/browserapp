import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import CustomSafeAreaView from '../../components/CustomSafeAreaView'

const Home = (props) => {
  return (
    <>
      <CustomSafeAreaView style={styles.viewCenter}>
        {/* <View style={styles.buttonView}> */}
        {/* <SafeAreaView style={styles.viewCenter}> */}
          <TouchableHighlight
            // style={styles.buttonView}
            onPress={()=>props.navigation.navigate("Browser")}
          >
            <Text style={styles.buttonText}>Browser</Text>
          </TouchableHighlight>
        {/* </View> */}
        {/* <View style={styles.buttonView}> */}
          <TouchableHighlight
            // style={styles.buttonView}
            onPress={()=>props.navigation.navigate("Settings")}
          >
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={()=>props.navigation.navigate("Barcode")}
          >
            <Text style={styles.buttonText}>Barcode Viewer</Text>
          </TouchableHighlight>
        {/* </SafeAreaView> */}
        {/* </View> */}
      </CustomSafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  viewCenter:{
    flex:1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  buttonText:{
    fontSize: 15,
    margin: 10,
  }
})

export default Home

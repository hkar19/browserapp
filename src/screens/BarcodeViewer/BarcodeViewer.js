import React, { useState } from 'react'
import CustomSafeAreaView from '../../components/CustomSafeAreaView'
import Barcode from "react-native-barcode-builder";
import { Text, TextInput, View } from 'react-native';

const BarcodeViewer = () => {
  // useState
  const [barcodeValue, setBarcodeValue] = useState("1234")
  return (
    <CustomSafeAreaView>
      <Barcode value={barcodeValue ? barcodeValue : "0"} format="CODE128"/>
      <Text style={{textAlign:'center'}}>
          Type your code here
        </Text>
      <View style={{
        borderWidth:1, 
        borderColor: 'brown', 
        borderRadius: 15,
        padding: 5
        }}>
        
        <TextInput
          style={{fontSize:16, textAlign:'center'}}
          value={barcodeValue}
          onChangeText={text=>{
            if(/\d/.test(text.substr(text.length-1,1)) || text === "") setBarcodeValue(text);
          }}
        />
      </View>
    </CustomSafeAreaView>
  )
}

export default BarcodeViewer

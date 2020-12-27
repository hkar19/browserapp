import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

const CustomSafeAreaView = ({style, children, ...props}) => {
  return (
    <SafeAreaView style={[styles.safeArea, style]} {...props}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    // backgroundColor: 'trans',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})

export default CustomSafeAreaView;

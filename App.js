import 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  // StatusBar,
  BackHandler
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IonIcons from "react-native-vector-icons/Ionicons";
import CustomSafeAreaView from './src/components/CustomSafeAreaView';
import Home from './src/screens/Home';
import Browser from './src/screens/Browser';
import Settings from './src/screens/Settings';
import BarcodeViewer from './src/screens/BarcodeViewer';

IonIcons.loadFont();

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Browser" component={Browser}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Barcode" component={BarcodeViewer}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;

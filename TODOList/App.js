/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import MainScreen from "./Components/MainScreen";


class App extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    return(
     <MainScreen /> 
    )
  }
}


export default App;

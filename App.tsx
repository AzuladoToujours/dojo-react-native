import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HelloWorldScreen } from './src/screens/helloWorld';
import { BasicCounterScreen } from './src/screens/basic-counter';
export default function App() {
  return (
    // <HelloWorldScreen></HelloWorldScreen>
    <BasicCounterScreen></BasicCounterScreen>
  );
}

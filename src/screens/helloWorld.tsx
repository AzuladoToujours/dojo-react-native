import React from "react";
import { View, Text } from 'react-native';

export const HelloWorldScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'green', justifyContent: "center" }}>
            <Text style={{ fontSize: 38, textAlign: 'center' }}>Como me compongo yo en el dia de hoy, como me compongo</Text>
        </View>
    )
}
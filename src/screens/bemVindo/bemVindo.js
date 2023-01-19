import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";

export default function BemVindo({navigation}){
    return(
        <View>
            <Text> bem Vindo</Text>
            <Button
            title="B"
            onPress={ () => navigation.navigate('TelaLogin')} />
        </View>


    );
}
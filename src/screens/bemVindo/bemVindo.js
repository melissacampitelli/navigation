import React from "react";
import { Button, StyleSheet, Image, View } from "react-native";


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00008B',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
    },
    img: {
      marginBottom:100,
      marginLeft: 30,
      width: 350,
      height: 150,
    },
    but: {
        backgroundColor:'red',
        borderColor:'red',
       
    }

  });

export default function BemVindo({navigation}){
    return(
        <View style={styles.container}>
        
            <Image
          source={ { uri: 'https://sgedu.suportegerencial.com.br/login/assets/images/logo_sgedu.png'} }
          style={ styles.img }
        />
        <Button
            title="fazer login"
            onPress={ () => navigation.navigate('TelaLogin')}
            style={ styles.but} />
         
        </View>
        


    );
}



import React from "react";
import { Button } from "react-native";
import {Image, StyleSheet, TextInput, TouchableOpacity, Text, View} from "react-native";

export default function TelaLogin({navigation}){
    return(
        <View  style={styles.container}>
            
        <Image
          source={ { uri: 'https://sgedu.suportegerencial.com.br/login/assets/images/logo_sgedu.png'} }
          style={ styles.img }
        />
        <TextInput style={ styles.input }
      placeholder= "E-mail"
      autoCorrect={false}
      onChangeText={()=> {}}
      />
      <TextInput style={ styles.input }
      placeholder= "senha"
      autoCorrect={false}
      onChangeText={()=> {}}  
      />
     
   <TouchableOpacity style={styles.btnSubmit}>
      <Text style={ styles.texto}>Entrar</Text>
   </TouchableOpacity> 
   
            
            <Button
            title="não possue Login? Cadastre-se"
            onPress={ () => navigation.navigate('TelaCadastro')} />
        </View>


    );
}

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00008B',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
  
    
  
    },
    texto: {
      color: 'blue',
      fontSize: 20,
    },
    img: {
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 30,
      width: 350,
      height: 150
    },
    input:{
      backgroundColor:'#fff',
      width: '60%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 10,
      padding: 10,
  
    },
    btnSubmit:{
      backgroundColor: 'orange',
      width: '60%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    }
  
  });

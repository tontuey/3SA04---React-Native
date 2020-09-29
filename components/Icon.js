import React from 'react';
import { View,Text,StyleSheet, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function Icon() {
   
    setTimeout(() => {
        Actions.replace('Interface');
    }, 4000);
    return (        
       <View style = {styles.con}>
           <Image style = {{width: 200,height: 200,}} 
           source={{uri:'https://cdn.dribbble.com/users/2000228/screenshots/6833456/gif_cloud.gif'}}/>
       </View>
           
    );
  }
  
  const styles = StyleSheet.create({
      con: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
      },
      
      

  })
  

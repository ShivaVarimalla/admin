import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,Dimensions,ScrollView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import { Picker } from '@react-native-picker/picker';


const Complaint=({SingleComplaint})=> {
  console.log(SingleComplaint)
  const statusToButton={
    'Not Seen':  <Picker style={styles.picker}>
    <Picker.Item label="Change Status" value="select" />
    <Picker.Item label="Not Seen" value="notseen" />
    <Picker.Item label="On Going" value="ongoing" />
    <Picker.Item label="Resolved" value="resolved" />
  </Picker>,
    'On Going': <Picker style={styles.picker1}>
    <Picker.Item label="Change Status" value="select" />
    <Picker.Item label="Not Seen" value="notseen" />
    <Picker.Item label="On Going" value="ongoing" />
    <Picker.Item label="Resolved" value="resolved" />
  </Picker>,
    'Resolved': <Picker style={styles.picker2}>
    <Picker.Item label="Change Status" value="select" />
    <Picker.Item label="Not Seen" value="notseen" />
    <Picker.Item label="On Going" value="ongoing" />
    <Picker.Item label="Resolved" value="resolved" />
  </Picker>,
  }

  return (
        <View style={styles.Container}>
          <View style={styles.category}>
            <Text style={[styles.textHeading,{color:'#f4f4f4'}]}>Issue: {SingleComplaint.category}</Text>
          </View>
        <View style={styles.complaint}>
            <Text style={[styles.textPara,styles.backColor]}>{SingleComplaint.complaint}</Text>
        </View>
        <View style={styles.details}>
            <View style={styles.detailsUserInfo}>
                <Text style={[styles.textParaSmall,styles.backColor]}>
                  <Ionicons name="ios-call" size={24} color="#34363A" /> {SingleComplaint.mobileno}
                </Text>
                <Text style={[styles.textParaSmall,styles.backColor]}>
                  <Ionicons name="md-home" size={24} color="#34363A" /> {SingleComplaint.hno}
                </Text>
            </View>
            {statusToButton[SingleComplaint.status]}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    Container:{
      flex:1,
      width:width-60,
      backgroundColor:'#f7f5f0',
      borderRadius:4,
      margin:10,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation:4
    },
    category:{
      flex:1,
      borderBottomColor:"#34363A",
      borderBottomWidth:1,
      backgroundColor:'#2d2926',
      padding:10,
      borderTopRightRadius:4,
      borderTopLeftRadius:4
    },
    complaint:{
      paddingVertical:10,
      padding:10,
    },
    textHeading:{
      fontSize:20,
      fontWeight:"bold"
    },
    textPara:{
      fontSize:16
    },
    textParaSmall:{
      fontSize:13
    },
    backColor:{
      color:"#34363A"
    },
    details:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      borderTopColor:"#34363A",
      borderTopWidth:1,
      paddingTop:10,
      padding:10,
    },
    detailsUserInfo:{
      flex:2,
      justifyContent:'center',
      alignItems:"flex-start"
    },
    picker:{
      flex:1,
      justifyContent:'center',
      alignItems:"center",
      backgroundColor:'#f4f466',
      borderRadius:2,
      elevation:4
    },
    picker1:{
      flex:1,
      justifyContent:'center',
      alignItems:"center",
      backgroundColor:'coral',
      borderRadius:2,
      elevation:4
    },
    picker2:{
      flex:1,
      justifyContent:'center',
      alignItems:"center",
      backgroundColor:'#74ad51',
      borderRadius:2,
      elevation:4
    },
  
})

export default Complaint;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View,ScrollView,FlatList, Text, SafeAreaView } from 'react-native';
import Complaint from './Complaint';

const ComplaintList=({Com})=> {
  console.log(Com)
  return (
    <SafeAreaView style={{marginHorizontal:10}}>
        <FlatList
          data = {Com}
          renderItem = {({item})=>{
            return <Complaint SingleComplaint={item}/>
          }}
          keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
}
export default ComplaintList;
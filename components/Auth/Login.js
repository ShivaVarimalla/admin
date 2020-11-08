import React, { useState } from 'react';
import {Text, View,TouchableOpacity,StyleSheet,TextInput,Dimensions,Image} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import axios from 'axios';
//import qs from 'qs';
import AwesomeAlert from 'react-native-awesome-alerts';
import logo from '../Icons/logo.png'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Login = ({navigation,changeLog})=>{

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [errorAlert, setErrorAlert]  = useState(false);
    const [message, setMessage]  = useState('');
    const [title, setTitle]  = useState('');
    const [cancelText, setCancelText]  = useState('Ok');

    const loginHandler = ()=>{

      if(Username<6){
         setTitle('Some error occured')
         setMessage('Invalid Username')
         setErrorAlert(true)
         return;
      }
      if(Password<6){
         setTitle('Some error occured')
         setMessage('Invalid password!')
         setCancelText('Ok')
         setErrorAlert(true)
         return;
      }
      changeLog()
    }

    return(
      <View>
         <View style = {styles.Container}>
            <View style = {styles.loginCenter}>

               <View style={{flexDirection:'row',justifyContent:'center'}}>
                  <Image
                     style={{height:200,width:200}}
                     source={logo}
                  />
               </View>

               <View style = {styles.Login}>
                  <TextInput
                     style = {styles.TextInput}
                     placeholder = "Username"
                     underlineColorAndroid={'transparent'}
                     placeholderTextColor='white'
                     text={Username}
                     onChangeText={(text)=>{setUsername(text)}}
                  />
                  <TextInput
                     style = {styles.TextInput}
                     placeholder = "password"
                     underlineColorAndroid={'transparent'}
                     placeholderTextColor='white'
                     secureTextEntry = {true}
                     text={Password}
                     onChangeText={(text)=>{setPassword(text)}}
                  />
                  <TouchableOpacity onPress={loginHandler} style={styles.LoginButton}>
                     <Text style={{fontSize:20,color:'#34363A',textAlign:'center'}}>Login</Text>
                  </TouchableOpacity>
               </View>

            </View>

            <View style={{paddingBottom:30,flexDirection:'row'}}>
               <Text style={styles.Account}>
                  Dont have an Account? 
               </Text>
               <TouchableOpacity onPress = {()=>{navigation.navigate('Register')}}>
                     <Text style={styles.Account}> Register</Text>
                  </TouchableOpacity>
            </View>

         </View>
         <AwesomeAlert
            show={errorAlert}
            showProgress={false}
            title={title}
            message={message}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            cancelText={cancelText}
            onCancelPressed={() => {
               if(cancelText == 'Ok'){
                  setErrorAlert(false)
                  return
               }
               else{
                  setErrorAlert(false)
                  changeLog()
               }
            }}
         />
      </View>
    );

}

const styles = StyleSheet.create({
    Container:{
       backgroundColor:'#34363A',
       height:height+75,
       flexDirection:'column',
       justifyContent:'space-around',
       alignItems:'center',
       overflow:'hidden'
    },
    whiteColor:{
       color:'#d9d9d9'
    },
    TextInput:{
       height:40,
       width:width-100,
       textAlign:'center',
       backgroundColor:'black',
       opacity:0.3,
       margin:10,
       borderRadius:4,
       fontSize:20,
       color:'#d9d9d9'
    },
    LoginButton:{
       width:150,
       backgroundColor:'#d9d9d9',
       alignSelf:'center',
       borderRadius:4,
       margin:10,
       paddingVertical:7
    },
    Account:{
       color:'#d9d9d9',
       fontSize:15
    }
})

export default Login;
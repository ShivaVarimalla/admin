import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home/Home';
import Complaint from './components/Complaint/ComplaintHome';
import Category from './components/Category/Category'
//import Auth from './components/Screens/AuthScreen';
import AuthScreen from './components/Screens/AuthScreen';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn,setIsLoggedin] = useState(false);

  const changeLoggedIn =()=>{
    setIsLoggedin(true)
  }

  if(isLoggedIn){
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Complaint" component={Complaint} />
          <Tab.Screen name="Category" component={Category} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }else{
    return <AuthScreen changeLog={changeLoggedIn}/>
  }
}

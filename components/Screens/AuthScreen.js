import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../Auth/Login';


const AuthScreen = ({changeLog})=>{
    const HomeStack = createStackNavigator();
    return (
        <NavigationContainer>
            <HomeStack.Navigator initialRouteName = "Login">
                <HomeStack.Screen name="Login" options={{ headerShown: false }}>
                    {props => <Login {...props} changeLog={changeLog} />}
                </HomeStack.Screen>
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}

export default AuthScreen;
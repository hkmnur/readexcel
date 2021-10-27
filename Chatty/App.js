import React from "react";
import { Text } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ChatList from './screens/ChatList';
import Chat from './screens/Chat';
import  Settings  from './screens/Settings';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack=createNativeStackNavigator();

const Tabs=createBottomTabNavigator();

const TabsNavigator = () =>{
    <Tabs.Navigator>
        <Tabs.Screen name="ChatList" component={ChatList}/>
        <Tabs.Screen name="Settings" component={Settings}/>
    </Tabs.Navigator>
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Main" component={TabsNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
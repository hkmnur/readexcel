import React,{useEffect} from "react";
import {NavigationContainer,useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ChatList from './screens/ChatList';
import Chat from './screens/Chat';
import  Settings  from './screens/Settings';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import {Provider,DefaultTheme} from 'react-native-paper'; //chatlist ekranında dialog penceresini göstermek için provider tanımlandı
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCTB1cw8WFmgAodvsfWulVp7ASjY59cXN0",
  authDomain: "chat-app-efd2b.firebaseapp.com",
  projectId: "chat-app-efd2b",
  storageBucket: "chat-app-efd2b.appspot.com",
  messagingSenderId: "293715205925",
  appId: "1:293715205925:web:43e13cae48c3692ed884cc"
};



  firebase.initializeApp(firebaseConfig);




const Stack=createNativeStackNavigator();

const Tabs=createBottomTabNavigator();

const TabsNavigator = () => {
    const navigation = useNavigation();
    useEffect(()=> {
      firebase.auth().onAuthStateChanged(user => {
        if(!user){
           navigation.navigate("SignUp");
        }
      })

  },[]);
  return(
    <Tabs.Navigator screenOptions={({route}) => ({
      tabBarIcon:({ focused ,color,size}) => {
          return <Ionicons name={route.name=== "ChatList" ?"chatbubbles" :"settings"}
           color={color} 
           size={size}/>;
      }

    })}>
        <Tabs.Screen name="ChatList" component={ChatList}/>
        <Tabs.Screen name="Settings" component={Settings}/>
    </Tabs.Navigator>
  )
}

const theme={
  ...DefaultTheme,
  roundness:2,
  colors:{
    ...DefaultTheme.colors,
    primary:"#2196f3",
    accent:"#e91e63",
  },
};



const App = () => {
  return(
    <NavigationContainer>
      <Provider theme={theme}> 
        <Stack.Navigator>
            <Stack.Screen 
              name="Main" 
              component={TabsNavigator}
              options={{headerShown:false}} //main kısmı kapatıldı.
            />
            <Stack.Screen name="Chat" component={Chat}/>
            <Stack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{presentation :"fullScreenModal"}}
            />
            <Stack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{presentation :"fullScreenModal"}}
            
            />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
};
export default App;
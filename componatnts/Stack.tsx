import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import NeedMove from './NeedMove';
import Thanks from './Thanks';
import ThanksDrive from './ThanksDrive';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Stack.Screen name="Profile" component={ProfileScreen}  />
        <Stack.Screen name="needmove" component={NeedMove} />
        <Stack.Screen name="thanks" component={Thanks} />
        <Stack.Screen name="thanksDrive" component={ThanksDrive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
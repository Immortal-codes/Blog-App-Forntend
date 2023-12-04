// MainStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailScreen';
import CreatePost from '../screen/CreatePost'


const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3498db',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
           fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Blog-App " component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import AlbumDetails from '../screens/AlbumDetails';

export type MainStackParamList = {
  MainScreen: undefined;
  AlbumDetails: {albumId: number};
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{}}>
        <MainStack.Screen name="MainScreen" component={MainScreen} />
        <MainStack.Screen name="AlbumDetails" component={AlbumDetails} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;

import React from 'react';
import {RootStackNavigator} from './navigator';
import Home from '../views/Home/Home';
import Game from '../views/Game/Game';

const RootNavigator = () => {
  return (
    <RootStackNavigator.Navigator
      id={'RootNavigator'}
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <RootStackNavigator.Screen name={'Home'} component={Home} />
      <RootStackNavigator.Screen name={'Game'} component={Game} />
    </RootStackNavigator.Navigator>
  );
};

export default RootNavigator;

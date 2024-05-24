import {RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const RootStackNavigator =
  createNativeStackNavigator<RootStackParamList>();

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../styles/Colors';

const Home = () => {
  const navigator = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor: COLORS.main_2, flex: 1}}>
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <View style={{flex: 1 / 3, alignItems: 'center'}}>
          <Text style={{fontSize: 50, fontWeight: 'bold'}}>Tic Tac Toe</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Native</Text>
        </View>
        <View style={{width: '100%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.main_1,
              height: 40,
              width: '80%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}
            onPress={() => navigator.navigate('Game' as never)}>
            <Text>Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

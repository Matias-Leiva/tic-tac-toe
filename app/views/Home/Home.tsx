import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigator = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigator.navigate('Game' as never)}>
        <Text>Play</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

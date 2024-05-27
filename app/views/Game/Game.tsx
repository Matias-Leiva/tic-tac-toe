import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import useTicTacToeGame from '../../hooks/useTicTacToeGame';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../styles/Colors';

const Game = () => {
  const navigator = useNavigation();
  const [game, setGame] = useState<Array<Array<string>>>([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]);
  const {player, winner, restartGame, playGame} = useTicTacToeGame({
    game,
    setGame,
  });

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.main_2,
      }}>
      <View style={{}}>
        {winner.length > 0 ? (
          <Text>Winner: {winner}</Text>
        ) : (
          <Text>Player: {player}</Text>
        )}

        <TouchableOpacity onPress={restartGame}>
          <Text>Restart</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '95%',
          height: '60%',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            borderRadius: 16,
            backgroundColor: COLORS.main_1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          {game &&
            game.map((row, ri) => (
              <View
                style={{
                  flexDirection: 'row',
                  height: '33%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
                key={ri}>
                {row.map((col, ci) => (
                  <TouchableOpacity
                    key={ri + ci}
                    onPress={() => playGame(ri, ci)}
                    style={{
                      borderRadius: 12,
                      backgroundColor: '#fff',
                      height: '95%',
                      width: '30%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text>{col}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 5,
        }}>
        <TouchableOpacity onPress={() => navigator.navigate('Home' as never)}>
          <Text>Exit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Game;

const styles = StyleSheet.create({});

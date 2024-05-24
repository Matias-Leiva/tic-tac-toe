import React, {useEffect, useState} from 'react';

function useTicTacToeGame({game, setGame}: {game: any; setGame: any}) {
  const [player, setPlayer] = useState('o');
  const [winner, setWinner] = useState('');

  const restartGame = () => {
    setGame([
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ]);
    setPlayer('o');
    setWinner('');
  };

  const validate = (ri: number, ci: number): boolean => {
    if (game[ri][ci] != ' ' || winner.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const endGame = () => {
    //diagonal
    if (
      (game[0][0] == player && game[1][1] == player && game[2][2] == player) ||
      (game[0][2] == player && game[1][1] == player && game[2][0] == player)
    ) {
      setWinner(player);
      //horizontal
    } else if (
      (game[0][0] == player && game[0][1] == player && game[0][2] == player) ||
      (game[1][0] == player && game[1][1] == player && game[1][2] == player) ||
      (game[2][0] == player && game[2][1] == player && game[2][2] == player)
    ) {
      setWinner(player);
      //vertical
    } else if (
      (game[0][0] == player && game[1][0] == player && game[2][0] == player) ||
      (game[0][1] == player && game[1][1] == player && game[2][1] == player) ||
      (game[0][2] == player && game[1][2] == player && game[2][2] == player)
    ) {
      setWinner(player);
    } else {
      setPlayer(player => (player === 'x' ? 'o' : 'x'));
    }
  };

  useEffect(() => {
    endGame();
  }, [game]);

  const playGame = (ri: number, ci: number) => {
    const validKey: boolean = validate(ri, ci);
    if (validKey) {
      setGame(
        game.map((row: any, i: number) =>
          i != ri
            ? row
            : row.map((col: any, ci2: number) => (ci2 == ci ? player : col)),
        ),
      );
    }
  };
  return {game, player, winner, restartGame, playGame};
}

export default useTicTacToeGame;

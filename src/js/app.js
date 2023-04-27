console.log('app worked');

const game = new Game();
game.start();

import Game, { GameSavingData } from '/.game.js/';

import loadGame, { readGameSaving as loadGame } from '/.game.js/';

import saveGame, { writeGameSaving as saveGame } from '/.game.js/';

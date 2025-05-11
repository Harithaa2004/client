import React from 'react';
import './PlayGamesSection.css';
import snakeLadderImage from '../assets/snake-ladder.png';
import ludoImage from '../assets/ludo.png';
import chessImage from '../assets/chess.png';
import ticTacToeImage from '../assets/tic-tac-toe.png';
import boardGamesImage from '../assets/boardgames.png'; // Image for Board Games button
import casualGamesImage from '../assets/casualgames.png'; // Image for Casual Games button

const PlayGamesSection = () => {
  return (
    <div className="play-games-container">
      <h2>Play Games</h2>
      <div className="category-buttons">
          <img src={boardGamesImage} alt="Board Games" className="button-image" />
         
          <img src={casualGamesImage} alt="Casual Games" className="button-image" />
      </div>
      <div className="game-grid">
        <div className="game-card">
          <img src={snakeLadderImage} alt="Snake & Ladder" />
        </div>
        <div className="game-card">
          <img src={ludoImage} alt="LUDO" />
        </div>
        <div className="game-card">
          <img src={chessImage} alt="CHESS" />
        </div>
        <div className="game-card">
          <img src={ticTacToeImage} alt="Tic Tac Toe" />
        </div>
        {/* Add more game cards */}
      </div>
    </div>
  );
};

export default PlayGamesSection;
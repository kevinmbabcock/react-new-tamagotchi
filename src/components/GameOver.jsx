import React from 'react';
import PropTypes from 'prop-types';



function GameOver(props) {

  function handleNewGameCreation() {
    props.onNewGameCreation();
  }

  return (
    <div>
      <h1>Game Over!!!</h1>
      <button onClick={handleNewGameCreation}>Play Again</button>
    </div>
  );
}

GameOver.propTypes = {
  onNewGameCreation: PropTypes.func
};


export default GameOver;

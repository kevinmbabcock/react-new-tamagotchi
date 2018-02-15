import React from 'react';
import PlayButton from './PlayButton';
import FeedButton from './FeedButton';
import SleepButton from './SleepButton';
import PropTypes from 'prop-types';


function PlayGame(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Take care of Your  <span style={{color: 'red', fontSize: '56px'}}>{props.myTamagotchi.name}</span> Tamagotchi!</h2>
      <h3>Fun Level: <span style={{color: 'yellow'}}>{props.myTamagotchi.fun}</span></h3>
      <h3>Hunger Level: <span style={{color: 'green'}}>{props.myTamagotchi.hunger}</span></h3>
      <h3>Energy Level: <span style={{color: 'blue'}}>{props.myTamagotchi.energy}</span></h3>
      <br></br>
      <div style={{alignItems: 'center'}} className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-2">
          <PlayButton onPlayButtonClick={props.onPlayButtonClick} />
        </div>
        <div className="col-md-2">
          <FeedButton onFeedButtonClick={props.onFeedButtonClick} />
        </div>
        <div className="col-md-2">
          <SleepButton onSleepButtonClick={props.onSleepButtonClick} />
        </div>
        <div className="col-md-3">
        </div>
      </div>
    </div>
  );
}

PlayGame.propTypes = {
  onPlayButtonClick: PropTypes.func,
  onFeedButtonClick: PropTypes.func,
  onSleepButtonClick: PropTypes.func,
  myTamagotchi: PropTypes.object
};

export default PlayGame;

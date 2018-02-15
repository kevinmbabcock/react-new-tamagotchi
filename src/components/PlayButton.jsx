import React from 'react';
import PropTypes from 'prop-types';


function PlayButton(props) {

  function handlePlayButtonClick() {
    props.onPlayButtonClick();
  }

  return (
    <div>
      <button style={{borderRadius: '12px', backgroundColor: 'yellow', color: 'black', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '20px', border: 'none'}} onClick={handlePlayButtonClick}>Play</button>
    </div>
  );
}

PlayButton.propTypes = {
  onPlayButtonClick: PropTypes.func
};

export default PlayButton;

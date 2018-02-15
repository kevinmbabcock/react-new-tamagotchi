import React from 'react';
import PropTypes from 'prop-types';


function SleepButton(props) {

  function handleSleepButtonClick() {
    props.onSleepButtonClick();
  }

  return (
    <div>
      <button style={{borderRadius: '12px', backgroundColor: 'blue', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '20px', border: 'none'}} onClick={handleSleepButtonClick}>Sleep</button>
    </div>
  );
}

SleepButton.propTypes = {
  onSleepButtonClick: PropTypes.func
};

export default SleepButton;

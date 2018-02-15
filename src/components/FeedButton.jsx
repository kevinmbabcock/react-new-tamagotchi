import React from 'react';
import PropTypes from 'prop-types';



function FeedButton(props) {

  function handleFeedButtonClick() {
    props.onFeedButtonClick();
  }

  return (
    <div>
      <button style={{borderRadius: '12px', backgroundColor: 'green', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '20px', border: 'none'}} onClick={handleFeedButtonClick}>Feed</button>
    </div>
  );
}

FeedButton.propTypes = {
  onFeedButtonClick: PropTypes.func
};

export default FeedButton;

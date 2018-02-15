import React from 'react';
import PropTypes from 'prop-types';

function AddTamagotchi(props) {
  let _name = null;

  function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    props.onNewTamagotchiCreation({name: _name.value, hunger: 10, fun: 10, energy: 10});
    _name.value = '';
  }

  return (
    <div style={{textAlign: 'center'}}>
      <br></br>
      <br></br>
      <h2>Create Your Very Own Tamagotchi!</h2>
      <br></br>
      <br></br>
      <form onSubmit={handleNewTamagotchiFormSubmission}>
        <input style={{width: '250px', height: '50px', fontSize: '24px'}}
          type='text'
          id='name'
          placeholder='  Tamagotchi`s name'
          ref={(input) => {_name = input;}}/>
        <br></br>
        <br></br>
        <button style={{borderRadius: '12px', backgroundColor: 'red', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '20px', border: 'none'}} type='submit'>Play!</button>
      </form>
    </div>
  );
}

AddTamagotchi.propTypes = {
  onNewTamagotchiCreation: PropTypes.func
};

export default AddTamagotchi;

import React from 'react';
import Header from './Header';
import AddTamagotchi from './AddTamagotchi';
import PlayGame from './PlayGame';
import GameOver from './GameOver';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      game: 'new',
      tamagotchi: {}
    };
    this.handleNewTamagotchiCreation = this.handleNewTamagotchiCreation.bind(this);
    this.handleNewGameCreation = this.handleNewGameCreation.bind(this);
    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
    this.handleFeedButtonClick = this.handleFeedButtonClick.bind(this);
    this.handleSleepButtonClick = this.handleSleepButtonClick.bind(this);
    this.intervalMethods = this.intervalMethods.bind(this);
    this.updateTamagotchi = this.updateTamagotchi.bind(this);
    this.stillAlive = this.stillAlive.bind(this);
  }

  handleNewTamagotchiCreation(newTamagotchi) {
    this.setState({
      game: 'play',
      tamagotchi: newTamagotchi
    });
    this.tamagotchiStats = setInterval(() =>
      this.intervalMethods(),
    1000
    );
  }

  handleNewGameCreation() {
    this.setState({
      game: 'new'
    });
  }

  handlePlayButtonClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.fun++;
    this.setState({tamagotchi: newTamagotchi});
  }

  handleFeedButtonClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.hunger++;
    this.setState({tamagotchi: newTamagotchi});
  }

  handleSleepButtonClick() {
    var newTamagotchi = this.state.tamagotchi;
    newTamagotchi.energy++;
    this.setState({tamagotchi: newTamagotchi});
  }

  stillAlive() {
    if (this.state.tamagotchi.fun <= 0 || this.state.tamagotchi.hunger <= 0 || this.state.tamagotchi.energy <= 0) {
      this.setState({game: 'done'});
      clearInterval(this.tamagotchiStats);
    }
  }

  updateTamagotchi() {
    let newTamagotchi = this.state.tamagotchi;
    newTamagotchi.fun--;
    newTamagotchi.hunger--;
    newTamagotchi.energy--;
    this.setState({tamagotchi: newTamagotchi});
  }

  intervalMethods() {
    this.updateTamagotchi();
    this.stillAlive();
  }


  render() {

    let currentlyVisibleContent = null;
    if (this.state.game === 'new'){
      currentlyVisibleContent = <AddTamagotchi onNewTamagotchiCreation={this.handleNewTamagotchiCreation}/>;
    } else if (this.state.game === 'play'){
      currentlyVisibleContent = <PlayGame
        onPlayButtonClick={this.handlePlayButtonClick}
        onFeedButtonClick={this.handleFeedButtonClick}
        onSleepButtonClick={this.handleSleepButtonClick}
        myTamagotchi={this.state.tamagotchi}/>;
    } else if (this.state.game === 'done'){
      currentlyVisibleContent = <GameOver onNewGameCreation={this.handleNewGameCreation}/>;
    } else {
      currentlyVisibleContent = <Error404 />;
    }

    return(
      <div className="container">
        <style jsx global>{`
      body {
        background-color: black;
        color: white;
        font-family: Georgia
      }
      `}</style>
        <br/>
        <br/>
        <Header />
        <br/>
        <br/>
        {currentlyVisibleContent}
      </div>
    );
  }

}

export default App;

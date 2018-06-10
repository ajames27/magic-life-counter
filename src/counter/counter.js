import React, { Component } from "react";
import Expo from "expo";
import PropTypes from "prop-types";
import TwoPlayer from "../layouts/GameScreens/duel/duelContainer";
import LinkedMultiplayerContainer from "../layouts/GameScreens/multiplayer/multiPContainer";
import { mapIdToCounter, startingLife } from "./constants";

class LifeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterOne: 20,
      counterTwo: 20,
      counterThree: 20,
      counterFour: 20,
      isDarkTheme: false,
      colorOverlayVisible: false,
      gameMode: "multiplayer",
    };
  }

  componentDidMount() {
    Expo.SecureStore.getItemAsync("darkThemeEnabled").then(
      response => response && this.setState({ isDarkTheme: JSON.parse(response) })
    );
  }

  updateLifeCounter = ({ action, playerId, value }) => {
    const counter = mapIdToCounter[playerId];
    switch (action) {
      case "RESET": {
        this.setState({ counterOne: startingLife, counterTwo: startingLife });
        break;
      }
      case "INCREMENT": {
        this.setState(prevState => ({
          [counter]: prevState[counter] + value < 99 ? prevState[counter] + value : 99,
        }));
        break;
      }
      case "DECREMENT": {
        this.setState(prevState => ({
          [counter]: prevState[counter] - value > -8 ? prevState[counter] - value : -9,
        }));
        break;
      }
    }
  };

  updateGameMode = ({ gameMode }) => {
    const gameModes = {
      multiplayer: { startingLife: 40 },
      duel: { startingLife: 20 },
      "2HG": { startingLife: 30 },
    };
    this.setState({
      counterOne: gameModes[gameMode].startingLife,
      counterTwo: gameModes[gameMode].startingLife,
      counterThree: gameModes[gameMode].startingLife,
      counterFour: gameModes[gameMode].startingLife,
      gameMode: gameMode,
    });
  };

  toggleTheme = () => {
    this.setState(
      prevState => ({ isDarkTheme: !prevState.isDarkTheme }),
      () =>
        Expo.SecureStore.setItemAsync("darkThemeEnabled", JSON.stringify(this.state.isDarkTheme))
    );
  };
  toggleColorOverlay = () => {
    this.setState(prevState => ({
      colorOverlayVisible: true,
    }));
  };

  render() {
    const counterProps = {
      lifeHandler: this.updateLifeCounter,
      toggleTheme: this.toggleTheme,
      isDarkTheme: this.state.isDarkTheme,
      lifeTotals: [
        this.state.counterOne,
        this.state.counterTwo,
        this.state.counterThree,
        this.state.counterFour,
      ],
      colorOverlayVisible: this.state.colorOverlayVisible,
      toggleColorOverlay: this.toggleColorOverlay,
    };
    const gameModes = {
      duel: <TwoPlayer {...counterProps} />,
      "2HG": <TwoPlayer {...counterProps} />,
      multiplayer: <LinkedMultiplayerContainer {...counterProps} />,
    };
    return gameModes[this.state.gameMode];
  }
}

LifeScreen.propTypes = {
  startingLife: PropTypes.number,
};

export default LifeScreen;

import React, { Component } from "react";
import Expo from "expo";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import TwoPlayer from "../layouts/twoPlayer/tpContainer";
import TwoPlayerReverse from "../layouts/twoPlayerReverse/tprContainer";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDMM842AsXPjQYWKZSB3zPFpbwmvmbAJUY",
  authDomain: "magiclifecounter-b1607.firebaseapp.com",
  databaseURL: "https://magiclifecounter-b1607.firebaseio.com",
  projectId: "magiclifecounter-b1607",
  storageBucket: "magiclifecounter-b1607.appspot.com",
  messagingSenderId: "740222709671",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class LifeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterOneRef: firebase.database().ref(`rooms/5/counterOne/score`),
      counterOne: this.props.startingLife,
      counterTwo: this.props.startingLife,
      isDarkTheme: false,
      mapIdsToCounter: {
        1: "counterOne",
        2: "counterTwo",
        3: "counterThree",
        4: "counterFour",
      },
    };
  }

  componentDidMount() {
    Expo.SecureStore
      .getItemAsync("darkThemeEnabled")
      .then(response => response && this.setState({ isDarkTheme: JSON.parse(response) }));
  }

  storeLife = ({ roomID, playerId, lifeTotal }) => {
    firebase
      .database()
      .ref(`rooms/${roomID}/${playerId}`)
      .set({
        score: lifeTotal,
      });
  };

  updateLifeCounter = ({ action, playerId, value }) => {
    this.state.counterOneRef.on("value", snapshot => this.setState({ counterOne: snapshot.val() }));
    const { startingLife } = this.props;
    let currentPlayer = this.state.mapIdsToCounter[playerId];
    switch (action) {
      case "RESET": {
        this.setState({ counterOne: startingLife, counterTwo: startingLife }, () =>
          this.storeLife({
            roomID: 5,
            playerId: currentPlayer,
            lifeTotal: this.state[currentPlayer],
          })
        );
        break;
      }
      case "INCREMENT": {
        this.setState(
          {
            [currentPlayer]:
              this.state[currentPlayer] + value < 99 ? this.state[currentPlayer] + value : 99,
          },
          () =>
            this.storeLife({
              roomID: 5,
              playerId: currentPlayer,
              lifeTotal: this.state[currentPlayer],
            })
        );
        break;
      }
      case "DECREMENT": {
        this.setState({
          [currentPlayer]:
            this.state[currentPlayer] - value > -8 ? this.state[currentPlayer] - value : -9,
        });
        break;
      }
    }
  };

  toggleTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme }, () =>
      Expo.SecureStore.setItemAsync("darkThemeEnabled", JSON.stringify(this.state.isDarkTheme))
    );
  };

  render() {
    return (
      <TwoPlayerReverse
        lifeHandler={this.updateLifeCounter}
        toggleTheme={this.toggleTheme}
        isDarkTheme={this.state.isDarkTheme}
        counterOne={this.state.counterOne}
        counterTwo={this.state.counterTwo}
      />
    );
  }
}

LifeScreen.propTypes = {
  startingLife: PropTypes.number,
};

export default LifeScreen;

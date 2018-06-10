import React, { Component } from "react";
import Expo from "expo";
import PropTypes from "prop-types";
import TwoPlayer from "../layouts/GameScreens/duel/duelContainer";
import LinkedMultiplayerContainer from "../layouts/GameScreens/multiplayer/multiPContainer";
import { mapIdToCounter, startingLife } from "./constants";
import { DbConnect } from "../fb";
import { generateRoomName } from "../utils/roomName";

const gameModeComponentMap = {
  duel: TwoPlayer,
  "2HG": TwoPlayer,
  multiplayer: LinkedMultiplayerContainer,
};

const gameModes = {
  multiplayer: { startingLife: 40 },
  duel: { startingLife: 20 },
  "2HG": { startingLife: 30 },
};

class LifeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      isDarkTheme: false,
      colorOverlayVisible: false,
      gameMode: "multiplayer",
      roomId: props.navigation.getParam("roomId"),
      offline: props.navigation.getParam("offline"),
      deviceId: "1",
    };
  }

  componentDidMount() {
    Expo.SecureStore.getItemAsync("darkThemeEnabled").then(
      response => response && this.setState({ isDarkTheme: JSON.parse(response) })
    );
    const { roomId, offline } = this.state;
    const { db } = this.props;

    if (!offline) {
      if (roomId) {
        this.subscribeToRoom(roomId);
      } else {
        this.findNewRoomName().then(roomId => {
          console.warn(`Room id found ${roomId}`);
          this.createNewRoom(roomId).then(() => {
            this.setState({ roomId });
            return this.subscribeToRoom(roomId);
          });
        });
      }
    }
  }

  getRoomReference = roomId => this.props.db.collection("rooms").doc(roomId);

  subscribeToRoom = roomId => {
    this.getRoomReference(roomId).onSnapshot(data => {
      const roomData = data.data();
      const players = ["player0", "player1", "player2", "player3"].map(player => roomData[player]);
      this.setState({ players });
    });
  };

  createNewRoom = roomId => {
    const { gameMode } = this.state;
    const startLife = gameModes[gameMode].startingLife;

    const roomDoc = {};

    for (let i = 0; i < 4; i++) {
      roomDoc[`player${i}`] = {
        life: startLife,
      };
    }
    roomDoc.player0.id = "1";

    return this.getRoomReference(roomId).set(roomDoc);
  };

  findNewRoomName = () => {
    const { db } = this.props;
    const newRoomId = generateRoomName();
    console.warn(`Checking room id: ${newRoomId}`);
    return db
      .collection("rooms")
      .doc(newRoomId)
      .get()
      .then(response => {
        console.warn;
        if (!response.exists) {
          console.warn(`Room id: ${newRoomId} is open`);
          return newRoomId;
        }
        return this.findNewRoomName();
      });
  };

  updateLifeCount(roomId, playerPos, newLife) {
    const updateDoc = {
      [`player${playerPos}.life`]: newLife,
    };
    this.getRoomReference(roomId).update(updateDoc);
  }

  updateLifeCounter = ({ action, playerId, value }) => {
    const correctedPlayerId = playerId - 1;
    const counter = mapIdToCounter[correctedPlayerId];
    switch (action) {
      case "RESET": {
        this.setState({ counterOne: startingLife, counterTwo: startingLife });
        break;
      }
      case "INCREMENT": {
        const currentLife = this.state.players[correctedPlayerId].life;
        console.warn(currentLife);
        this.updateLifeCount(this.state.roomId, correctedPlayerId, currentLife + 1);
        break;
      }
      case "DECREMENT": {
        const currentLife = this.state.players[correctedPlayerId].life;
        console.warn(currentLife);
        this.updateLifeCount(this.state.roomId, correctedPlayerId, currentLife - 1);
        break;
      }
    }
  };

  updateGameMode = ({ gameMode }) => {
    const startLife = gameModes[gameMode].startingLife;

    this.setState({
      counterOne: startLife,
      counterTwo: startLife,
      counterThree: startLife,
      counterFour: startLife,
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

  isCurrentPlayer = player => player.id === this.state.deviceId;

  render() {
    const { players } = this.state;
    const currentPlayer = players.filter(this.isCurrentPlayer);
    const otherPlayers = players.filter(p => !this.isCurrentPlayer(p));
    const formattedPlayers = [...currentPlayer, ...otherPlayers].map(p => p.life);

    const counterProps = {
      lifeHandler: this.updateLifeCounter,
      toggleTheme: this.toggleTheme,
      isDarkTheme: this.state.isDarkTheme,
      lifeTotals: formattedPlayers,
      colorOverlayVisible: this.state.colorOverlayVisible,
      toggleColorOverlay: this.toggleColorOverlay,
      roomId: this.state.roomId,
    };

    const GameModeComponent = gameModeComponentMap[this.state.gameMode];

    return <GameModeComponent {...counterProps} />;
  }
}

LifeScreen.propTypes = {
  startingLife: PropTypes.number,
  roomId: PropTypes.string,
  db: PropTypes.object,
};

const ConnectedLifeScreen = props => (
  <DbConnect>{db => <LifeScreen {...props} db={db} />}</DbConnect>
);

export default ConnectedLifeScreen;

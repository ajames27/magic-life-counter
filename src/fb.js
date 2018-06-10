import React from "react";

import * as firebase from "firebase";
// Required for side effects
import "firebase/firestore";

import config from "./config";

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

const { Provider: DbProvider, Consumer: DbConnect } = React.createContext();

export { DbConnect, DbProvider, db };

import React from "react";
import ReactDOM from "react-dom/client";
import configureStore from "store";
import App from "./components/App";
const { store, persistor } = configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

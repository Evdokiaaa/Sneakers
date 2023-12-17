import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/assets/css/main.scss";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
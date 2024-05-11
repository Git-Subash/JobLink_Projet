import React, { version } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./Components/AuthContext.jsx";
import authReducer from "./store/state.js";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

const presistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(presistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
      },
    }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </AuthProvider>
);

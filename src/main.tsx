import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import ApolloProvider from "./contexts/ApolloProvider.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*const user = { firstName: "Hack", lastName: "aBoss" };

 function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const element = <h1 className="mi-clase">Hello, {formatName(user)}</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element); */
/* const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Reloj reshulon</h1>
      <h2>Son las {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(element);
}

setInterval(() => {
  tick();
}, 1000); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

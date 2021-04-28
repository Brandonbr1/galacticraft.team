import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./app/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(({name, delta, value, id}) => {
  gtag("event", name, {
    value: delta,
    metric_id: id,
    metric_value: value,
    metric_delta: delta,
  });
});

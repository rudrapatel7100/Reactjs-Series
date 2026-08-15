import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function App() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}
// removed unused anotherElement

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit Google",
);

createRoot(document.getElementById("root")).render(<App />);

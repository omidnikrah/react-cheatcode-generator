import CheatCode from "@lib/index";

import "./index.css";

export const App = () => {
  return (
    <CheatCode
      cheatCode={["up", "down", "left", "right"]}
      onSuccess={() => {
        window.alert("Success!");
      }}
      onFail={() => {
        window.alert("Fail!");
      }}
    />
  );
};

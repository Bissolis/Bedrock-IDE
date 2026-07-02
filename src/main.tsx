import React from "react";
import ReactDOM from "react-dom/client";
import MenuOptions from "./components/MenuOptions";
import FirstBlock from "./components/UI/FirstBlock";
import SecondBlock from "./components/UI/SecondBlock";
import ThirdBlock from "./components/UI/ThirdBlock";
import './style.css';
import Terminal from "./components/UI/Terminal";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="w-full h-full bg-zinc-800 grid grid-cols-32 grid-rows-32 gap-2">
      <MenuOptions />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <Terminal />
    </main>
  </React.StrictMode>,
);

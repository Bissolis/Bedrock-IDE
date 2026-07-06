import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Shulker from "./Shulker";
import Config from "./Config";

export default function App(){
    return(
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/shulker" element={<Shulker />} />
            <Route path="/config" element={<Config />} />
        </Routes>
    );
}
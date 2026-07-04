import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import IDE from "./IDE";

export default function App(){
    return(
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/ide" element={<IDE />} />
        </Routes>
    );
}
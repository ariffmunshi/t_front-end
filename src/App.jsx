import HomeScreen from "./screens/home/HomeScreen";
import "./App.css";
import { useState } from "react";

function App() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="container">
            <HomeScreen navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
    );
}

export default App;

import HomeScreen from "./screens/home/HomeScreen";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [navOpen, setNavOpen] = useState(false);
    const [apiList, setApiList] = useState([]);

    useEffect(() => {
        fetch("https://api.apis.guru/v2/providers.json")
            .then((response) => response.json())
            .then((json) => setApiList(json.data))
            .catch(() => console.log("Error"));
    }, []);

    return (
        <div className="container">
            <HomeScreen
                navOpen={navOpen}
                setNavOpen={setNavOpen}
                apiList={apiList}
            />
        </div>
    );
}

export default App;

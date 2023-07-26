import HomeScreen from "./screens/home/HomeScreen";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [navOpen, setNavOpen] = useState(false);
    const [apiList, setApiList] = useState([]);
    const [activeAPI, setActiveAPI] = useState("");
    const [apiDetails, setApiDetails] = useState({});

    useEffect(() => {
        fetch("https://api.apis.guru/v2/providers.json")
            .then((response) => response.json())
            .then((json) => setApiList(json.data))
            .catch(() => console.log("Error"));
    }, []);

    useEffect(() => {
        console.log(activeAPI);
        if (activeAPI) {
            fetch(`https://api.apis.guru/v2/${activeAPI}.json`)
                .then((response) => response.json())
                .then((json) => setApiDetails(Object.values(json.apis)[0].info))
                .catch(() => console.log("Error"));
        }
    }, [activeAPI]);

    return (
        <div className="container">
            <HomeScreen
                navOpen={navOpen}
                setNavOpen={setNavOpen}
                apiList={apiList}
                setActiveAPI={setActiveAPI}
                apiDetails={apiDetails}
            />
        </div>
    );
}

export default App;

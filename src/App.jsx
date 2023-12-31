import HomeScreen from "./screens/home/HomeScreen";
import "./App.css";
import { useState, useEffect } from "react";
import DetailsScreen from "./screens/details/DetailsScreen";

const apiMap = new Map();

function App() {
    const [navOpen, setNavOpen] = useState(false);
    const [apiList, setApiList] = useState([]);
    const [activeAPI, setActiveAPI] = useState("");
    const [apiDetails, setApiDetails] = useState({});
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        fetch("https://api.apis.guru/v2/providers.json")
            .then((response) => response.json())
            .then((json) => setApiList(json.data))
            .catch(() => console.log("Error"));
    }, []);

    useEffect(() => {
        if (activeAPI) {
            if (apiMap.has(activeAPI)) {
                console.log("read from map");
                return setApiDetails(apiMap.get(activeAPI));
            }
            fetch(`https://api.apis.guru/v2/${activeAPI}.json`)
                .then((response) => response.json())
                .then((json) => setApiDetails(Object.values(json.apis)[0]))
                .catch(() => console.log("Error"));
        }
    }, [activeAPI]);

    useEffect(() => {
        if (activeAPI) {
            apiMap.set(activeAPI, apiDetails);
        }
    }, [apiDetails]);

    return isSelected ? (
        <DetailsScreen
            apiDetails={apiDetails}
            setIsSelected={setIsSelected}
            setNavOpen={setNavOpen}
        />
    ) : (
        <div className="container">
            <HomeScreen
                navOpen={navOpen}
                setNavOpen={setNavOpen}
                apiList={apiList}
                setActiveAPI={setActiveAPI}
                apiDetails={apiDetails}
                setIsSelected={setIsSelected}
            />
        </div>
    );
}

export default App;

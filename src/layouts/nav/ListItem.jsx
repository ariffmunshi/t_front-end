import chevronIcon from "../../assets/chevron-icon.svg";

function ListItem({ api, setActiveAPI, apiDetails }) {
    const active = api === apiDetails["x-providerName"];
    const handleClick = (target) => {
        const parentNode = target.parentNode;
        if (parentNode.classList.contains("active")) {
            parentNode.classList.remove("active");
            setActiveAPI("");
        } else {
            setActiveAPI("");
            parentNode.classList.add("active");
            setActiveAPI(target.textContent);
        }
    };
    return (
        <li className={`side-nav_list-item ${active ? "active" : ""}`}>
            <a
                href="#"
                className="side-nav_link"
                onClick={(e) => handleClick(e.target)}
            >
                {api}
                <img
                    src={chevronIcon}
                    alt="chevron icon"
                    className="chevron-icon"
                />
            </a>
            <a href="#" className="side-nav_link-details">
                <img src={apiDetails["x-logo"]?.url} className="api-logo" />
                {apiDetails.title}
            </a>
        </li>
    );
}

export default ListItem;

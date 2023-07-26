import chevronIcon from "../../assets/chevron-icon.svg";

function ListItem({ api }) {
    return (
        <li className="side-nav_list-item">
            <a href="#" className="side-nav_link">
                {api}
                <img
                    src={chevronIcon}
                    alt="chevron icon"
                    className="chevron-icon"
                />
            </a>
            <a href="#" className="side-nav_link-details">
                <img alt="API logo" className="api-logo" />
                API TITLE
            </a>
        </li>
    );
}

export default ListItem;

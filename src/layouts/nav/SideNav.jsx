import "./SideNav.css";
import chevronIcon from "../../assets/chevron-icon.svg";

function SideNav() {
    return (
        <aside className="side-nav-container">
            <nav className="side-nav">
                <h2 className="side-nav_title">Select Provider</h2>
                <ul className="side-nav_list">
                    <li className="side-nav_list-item">
                        <a href="#" className="side-nav_link">
                            API NAME
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
                    <li className="side-nav_list-item active">
                        <a href="#" className="side-nav_link">
                            API NAME
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
                </ul>
            </nav>
        </aside>
    );
}

export default SideNav;

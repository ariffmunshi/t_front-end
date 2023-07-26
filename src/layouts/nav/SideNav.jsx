import "./SideNav.css";
import ListItem from "./ListItem";

function SideNav({ active, setNavOpen, apiList }) {
    return (
        <aside
            className={`side-nav-container ${active ? "active" : ""}`}
            onClick={() => setNavOpen(false)}
        >
            <nav className="side-nav" onClick={(e) => e.stopPropagation()}>
                <h2 className="side-nav_title">Select Provider</h2>
                <ul className="side-nav_list">
                    {apiList.map((api, index) => (
                        <ListItem key={index} api={api} />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default SideNav;

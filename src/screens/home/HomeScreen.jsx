import PrimaryButton from "../../components/buttons/PrimaryButton";
import SideNav from "../../layouts/nav/SideNav";
import "./HomeScreen.css";

function HomeScreen({
    navOpen,
    setNavOpen,
    apiList,
    setActiveAPI,
    apiDetails,
}) {
    return (
        <>
            <main className="home-screen">
                <PrimaryButton setNavOpen={setNavOpen} />
            </main>
            <SideNav
                active={navOpen}
                setNavOpen={setNavOpen}
                apiList={apiList}
                setActiveAPI={setActiveAPI}
                apiDetails={apiDetails}
            />
        </>
    );
}

export default HomeScreen;

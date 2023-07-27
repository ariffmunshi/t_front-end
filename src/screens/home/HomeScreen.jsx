import PrimaryButton from "../../components/buttons/PrimaryButton";
import SideNav from "../../layouts/nav/SideNav";
import "./HomeScreen.css";

function HomeScreen({
    navOpen,
    setNavOpen,
    apiList,
    setActiveAPI,
    apiDetails,
    setIsSelected,
}) {
    return (
        <>
            <main className="home-screen">
                <PrimaryButton
                    setNavOpen={setNavOpen}
                    setIsSelected={setIsSelected}
                />
            </main>
            {navOpen && (
                <SideNav
                    active={navOpen}
                    setNavOpen={setNavOpen}
                    apiList={apiList}
                    setActiveAPI={setActiveAPI}
                    apiDetails={apiDetails}
                    setIsSelected={setIsSelected}
                />
            )}
        </>
    );
}

export default HomeScreen;

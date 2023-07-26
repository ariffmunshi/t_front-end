import PrimaryButton from "../../components/buttons/PrimaryButton";
import SideNav from "../../layouts/nav/SideNav";
import "./HomeScreen.css";

function HomeScreen({ navOpen, setNavOpen }) {
    return (
        <>
            <main className="home-screen">
                <PrimaryButton setNavOpen={setNavOpen} />
            </main>
            <SideNav active={navOpen} setNavOpen={setNavOpen} />
        </>
    );
}

export default HomeScreen;

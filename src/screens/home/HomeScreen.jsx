import PrimaryButton from "../../components/buttons/PrimaryButton";
import SideNav from "../../layouts/nav/SideNav";
import "./HomeScreen.css";

function HomeScreen() {
    return (
        <>
            <main className="home-screen">
                <PrimaryButton />
            </main>
            <SideNav />
        </>
    );
}

export default HomeScreen;

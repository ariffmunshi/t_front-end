import PrimaryButton from "../../components/buttons/PrimaryButton";
import "./DetailsScreen.css";

function DetailsScreen({ apiDetails, setIsSelected, setNavOpen }) {
    return (
        <main className="container details-screen">
            <header className="details-screen_header">
                <img
                    className="details-screen_api-logo"
                    src={apiDetails["x-logo"]?.url}
                />
                <h1>{apiDetails.title}</h1>
            </header>
            <div className="details-screen_description">
                <div className="details-screen_section">
                    <h2>Description</h2>
                    <p>{apiDetails.description}</p>
                </div>
                <div className="details-screen_section">
                    <h2>Swagger</h2>
                    <p>placeholder</p>
                </div>
                <div className="details-screen_section">
                    <h2>Contact</h2>
                    <p>
                        <span>Email</span> {apiDetails.contact.email}
                    </p>
                    <p>
                        <span>Name</span> {apiDetails.contact.name}
                    </p>
                    <p>
                        <span>Url</span> {apiDetails.contact.url}
                    </p>
                </div>
            </div>
            <PrimaryButton
                setNavOpen={setNavOpen}
                setIsSelected={setIsSelected}
            />
        </main>
    );
}

export default DetailsScreen;

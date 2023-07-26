import "./PrimaryButton.css";

function PrimaryButton({ setNavOpen }) {
    return (
        <button className="primary-btn" onClick={() => setNavOpen(true)}>
            Explore web APIs
        </button>
    );
}

export default PrimaryButton;

import "./PrimaryButton.css";

function PrimaryButton({ setNavOpen, setIsSelected }) {
    const handleClick = () => {
        setIsSelected(false);
        setNavOpen(true);
    };
    return (
        <button className="primary-btn" onClick={handleClick}>
            Explore web APIs
        </button>
    );
}

export default PrimaryButton;

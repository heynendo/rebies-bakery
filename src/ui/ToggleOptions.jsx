import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import "../styles/toggle-options.css";

export default function ToggleOptions({
    options = [],
    currentOption,
    setCurrentOption
}) {

    const currentIndex = options.findIndex(
        option => option.name === currentOption?.name
    );

    function previous() {
        if (currentIndex > 0) {
            setCurrentOption(options[currentIndex - 1]);
        }
    }

    function next() {
        if (currentIndex < options.length - 1) {
            setCurrentOption(options[currentIndex + 1]);
        }
    }

    return (
        <div className="toggle-options">
            <MinusIcon
                size={12}
                onClick={previous}
            />

            <h3>{currentOption?.name}</h3>

            <PlusIcon
                size={12}
                onClick={next}
            />
        </div>
    );
}
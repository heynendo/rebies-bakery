

export default function ToggleOptions({selectedOption, setSelectedOption, options}){

    return(
        <div className="toggle-options">
            <div>-</div>
            {selectedOption}
            <div>+</div>
        </div>
    )
}
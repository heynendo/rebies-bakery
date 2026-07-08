import "../styles/search-bar.css"

export default function SearchBar({userInput, setUserInput}){
    return(
        <input
            id="search-bar"
            className="search-bar"
            placeholder="search"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
        />
    )
}
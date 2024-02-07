import './styles/SearchResultsList.css'
import SearchResult from './SearchResult'

function SearchResultsList({results, setProduct, isCity}){
    return(
        <div className="results-list">
            {results.map((item) => (
                <SearchResult item={item} setProduct={setProduct} key={(isCity ? 0 : item.id)}/>
            ))}
        </div>
    )
}

export default SearchResultsList
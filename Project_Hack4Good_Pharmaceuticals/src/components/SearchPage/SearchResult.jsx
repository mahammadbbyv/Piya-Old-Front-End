import './styles/SearchResult.css'

function SearchResult({item, setProduct}){
    return(
        <>
        <div className="search-result" onClick={() => setProduct(item.name)}>
            <button onClick={() => setProduct(item.name)}>{item.name}</button>
            <hr />
        </div>   
        </>
    )
}

export default SearchResult
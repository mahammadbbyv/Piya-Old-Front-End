function Header(){
    return(
        <header>
            <div className="container">
                <div className="search-box">
                    <input type="text" />
                    <span></span>
                </div>
                <ul class="navbar">
                    <li><a>Search</a></li>
                    <li><a>Join</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
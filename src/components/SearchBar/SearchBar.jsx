import './searchBar.scss'

// eslint-disable-next-line react/prop-types
function SearchBar({onView, stateView, onSearch}) {

    //recup les entrée du search
    const handleSearchChange = (e) => {
        onSearch(e.target.value)
        // console.log(e.target.value)
    }

    return (
        <div className="section__header">
            <h1>
                Wishlist
            </h1>

            <div className="left__content">

                <div className="search-container">
                    <input type="search" id="search" name="search" onChange={handleSearchChange}/>
                    <button type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="#fff"
                                d="M13.13 11.88h-.66l-.232-.226a5.393 5.393 0 001.308-3.525 5.417 5.417 0 10-5.417 5.417 5.393 5.393 0 003.525-1.308l.225.233v.658l4.167 4.159 1.242-1.242-4.159-4.167zm-5 0a3.745 3.745 0 01-3.75-3.75 3.745 3.745 0 013.75-3.75 3.745 3.745 0 013.75 3.75 3.745 3.745 0 01-3.75 3.75z"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className="addMovie-cta">
                    <button>
                        Add a movie
                    </button>
                </div>

                <div className="switchView-cta">

                    <div onClick={onView}
                         className={`grid__column ${stateView ? 'active' : ''}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="#B9B9C6"
                                fillRule="evenodd"
                                d="M12.292 3.125v4.583h4.583V3.125h-4.583zM11.042 3c0-.621.503-1.125 1.125-1.125H17c.621 0 1.125.504 1.125 1.125v4.833c0 .622-.504 1.125-1.125 1.125h-4.833a1.125 1.125 0 01-1.125-1.125V3zM3.125 16.875v-4.583h4.583v4.583H3.125zM3 11.042c-.621 0-1.125.503-1.125 1.125V17c0 .621.504 1.125 1.125 1.125h4.833c.622 0 1.125-.504 1.125-1.125v-4.833c0-.622-.503-1.125-1.125-1.125H3zm9.292 5.833v-4.583h4.583v4.583h-4.583zm-.125-5.833c-.622 0-1.125.503-1.125 1.125V17c0 .621.503 1.125 1.125 1.125H17c.621 0 1.125-.504 1.125-1.125v-4.833c0-.622-.504-1.125-1.125-1.125h-4.833zM3.125 7.708V3.125h4.583v4.583H3.125zM3 1.875c-.621 0-1.125.504-1.125 1.125v4.833c0 .622.504 1.125 1.125 1.125h4.833c.622 0 1.125-.503 1.125-1.125V3c0-.621-.503-1.125-1.125-1.125H3z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>

                    <div onClick={onView}
                         className={`grid__row ${!stateView ? 'active' : ''}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="#EFEFEF"
                                fillRule="evenodd"
                                d="M1.875 3c0-.621.504-1.125 1.125-1.125h14c.621 0 1.125.504 1.125 1.125v14c0 .621-.504 1.125-1.125 1.125H3A1.125 1.125 0 011.875 17V3zm1.25.125v2.5h13.75v-2.5H3.125zm13.75 3.75H3.125v2.5h13.75v-2.5zm0 3.75H3.125v2.5h13.75v-2.5zm0 3.75H3.125v2.5h13.75v-2.5z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default SearchBar;
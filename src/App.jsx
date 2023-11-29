import './App.css'
import Filter from "./components/Filter/Filter.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Delete from "./components/Delete/Delete.jsx";
import AddMovie from "./components/AddMovie/AddMovie.jsx";
import GridView from "./components/GridView/GridView.jsx";
import RowsView from "./components/RowsView/RowsView.jsx";
import {useEffect, useState} from "react";

function App() {

    const [toggleView, setToggleView] = useState(true)
    const [selectAll, setSelectAll] = useState(false);
    const [searchItem, setSearchItem] = useState("")
    const [category, setCategory] = useState("")
    const [quality, setQuality] = useState("")


    const [APIState, setAPIState] = useState({
        error: true,
        data: undefined
    })

    useEffect(() => {
        fetch('data.json')
            .then(res => {
                if (!res.ok) throw new Error()
                return res.json()
            })
            .then(data => {
                //Set du state global et du checked false
                const movies = data.movie.map(movie => ({
                    ...movie,
                    checked: false,
                }))
                setAPIState({error: false, data: movies})
            })
            .catch(() => {
                setAPIState({error: true, data: undefined})
            })
    }, []);

    let length = APIState.data && APIState.data.length

    //get les categories et elimine les doublons
    let categories = [];
    let qualityAll = []

    if (APIState.data) {
        APIState.data.forEach(el => {
            el.categories.forEach(category => {
                categories[category] = true;
            })
        })

        APIState.data.forEach(el => {
            qualityAll[el.bestQuality] = true
        })

        categories = Object.keys(categories);

        qualityAll = Object.keys(qualityAll);
        // console.log(qualityAll)

    }

    //change chcked statue with actual state & new state
    const toggleCheck = (id) => {
        setAPIState(prevState => ({
            ...prevState,
            data: prevState.data.map(movie => movie.id === id ? {...movie, checked: !movie.checked} : movie)
        }));
        console.log(APIState)
    };


    //select tout les items
    const toggleCheclAll = () => {
        setSelectAll(!selectAll)
        APIState.data.forEach(el => toggleCheck(el.id))
    }

    //delete checked true element
    const remove = () => {
        setAPIState(prevState => ({
            ...prevState,
            data: prevState.data.filter(movie => !movie.checked)
        }));

        setSelectAll(false)
    };

    //toggle view
    const toggleViewFunc = () => {
        setToggleView(!toggleView)
    }

    //filter searched films
    let filteredMovies = APIState.data;

    if (searchItem) {
        console.log(searchItem)
        filteredMovies = APIState.data.filter(movie =>
            // insensible a la casse
            movie.title.toLowerCase().includes(searchItem.toLowerCase())
        );
    }

    // filtre categorie
    if (category) {
        filteredMovies = filteredMovies.filter(movie =>
            movie.categories.includes(category)
        );
    }

    //filtre quality
    if (quality) {
        filteredMovies = filteredMovies.filter(movie =>
            movie.bestQuality === quality
        );
    }


    return (
        <>
            <SearchBar onView={toggleViewFunc} stateView={toggleView} onSearch={setSearchItem}/>

            <Filter qualities={qualityAll} catAll={categories} onCategorySet={setCategory} onQualitySet={setQuality}/>

            <AddMovie/>

            <Delete onRemove={remove} itemCount={length}/>

            {toggleView ? (
                <GridView data={filteredMovies} onChecked={toggleCheck}/>
            ) : (
                <RowsView data={filteredMovies} onChecked={toggleCheck} onCheckedAll={toggleCheclAll}
                          allState={selectAll}/>
            )}

        </>
    )
}

export default App

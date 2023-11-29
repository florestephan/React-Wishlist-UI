import './filter.scss'
import {useState} from "react";

function Filter({qualities, catAll, onCategorySet, onQualitySet}) {

    //initial set for all
    const [activeCategory, setActiveCategory] = useState(null)
    const [activeQuality, setActiveQuality] = useState(null)

    const handleCategoryClick = (category) => {
        onCategorySet(category)
        setActiveCategory(category)
    }


    const handleClickAll = () => {
        onCategorySet(null)
        onQualitySet(null)
        setActiveCategory(null)
        setActiveQuality(null)
    }

    const handleQualityClick = (quality) => {
        onQualitySet(quality)
        setActiveQuality(quality)
    }

    const renderListItem = (value, type, handleClick) => {
        //active category ou active quality
        const isActive = value === activeCategory || value === activeQuality
        console.log(isActive)

        const className = `${type} ${isActive ? "active" : ""}`

        return (
            <li className={className} onClick={() => handleClick(value)} id={value} key={value}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.8333 10.8333H10.8333V15.8333H9.16667V10.8333H4.16667V9.16663H9.16667V4.16663H10.8333V9.16663H15.8333V10.8333Z"
                        fill="white"/>
                </svg>
                {value}
            </li>
        )
    }

    return (
        <>
            <ul className="section__category">
                <li className={`all ${activeQuality === null && activeCategory === null ? "active" : ""}`}
                    onClick={handleClickAll}>All
                </li>
                {catAll.map((value) => renderListItem(value, `category`, handleCategoryClick))}
                {qualities.map((value) => renderListItem(value, `quality`, handleQualityClick))}
            </ul>
        </>
    );
}

export default Filter;
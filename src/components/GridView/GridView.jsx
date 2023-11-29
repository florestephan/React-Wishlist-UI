import './gridView.scss'

function GridView({data, onChecked}) {

    return (

        <div className="movies--container">

            <ul className="gridCtn gridWrap">
                {data && data.map((value, index) => (
                    <li key={index} id={index}>
                        {value.isNew && (
                            <span className="new">NEW</span>
                        )}
                        <label htmlFor="checkbox">
                            <div className="img--block">
                                <label htmlFor="checkbox1">
                                    <input id={index} onChange={() => onChecked(value.id)} name="checkbox1"
                                           checked={value.checked} type="checkbox"/>
                                </label>


                                <div className="container--quality">
                                    <p className="quality">{value.bestQuality}</p>
                                </div>
                                <img src={value.cover} alt=""/>
                            </div>
                            <h3>{value.title}</h3>

                            <div className="hover__card">
                                <h3>{value.title}</h3>
                                <span className="category">{value.categories}</span>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
        </div>


    );
}

export default GridView;
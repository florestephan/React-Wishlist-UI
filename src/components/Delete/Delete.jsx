import './Delete.scss'

function Delete({onRemove, itemCount}) {

    return (
        <>
            <div className="deletion">
                <div className="container__title-cta">
                    <h2 className="title--count">Titles <span>({itemCount})</span></h2>
                    <button onClick={onRemove} className="delete__cta">
                        Delete selection
                    </button>
                </div>
            </div>
        </>
    );
}

export default Delete;
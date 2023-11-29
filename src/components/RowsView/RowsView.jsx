import './rowsView.scss'
import {useState} from "react";

// eslint-disable-next-line react/prop-types
function RowsView({data, onChecked, onCheckedAll, allState}) {


    return (
        <div className="rows__container">
            <div className="gridCtn gridWrap">
                <div className="header--table">
                    <label htmlFor="checkAll">
                        <input checked={allState} onChange={onCheckedAll} type="checkbox"/>
                    </label>
                    <p className="title">Title
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.00002 2.915L7.58502 4.5L8.29002 3.795L6.00002 1.5L3.70502 3.795L4.41502 4.5L6.00002 2.915ZM6.00002 9.085L4.41502 7.5L3.71002 8.205L6.00002 10.5L8.29502 8.205L7.58502 7.5L6.00002 9.085Z"
                                fill="#8F8FA3"/>
                        </svg>
                    </p>
                    <p className="category">Category
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.00002 2.915L7.58502 4.5L8.29002 3.795L6.00002 1.5L3.70502 3.795L4.41502 4.5L6.00002 2.915ZM6.00002 9.085L4.41502 7.5L3.71002 8.205L6.00002 10.5L8.29502 8.205L7.58502 7.5L6.00002 9.085Z"
                                fill="#8F8FA3"/>
                        </svg>
                    </p>
                    <p className="best-quality">Best Quality
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.00002 2.915L7.58502 4.5L8.29002 3.795L6.00002 1.5L3.70502 3.795L4.41502 4.5L6.00002 2.915ZM6.00002 9.085L4.41502 7.5L3.71002 8.205L6.00002 10.5L8.29502 8.205L7.58502 7.5L6.00002 9.085Z"
                                fill="#8F8FA3"/>
                        </svg>
                    </p>
                </div>
                {data && data.map((value, index) => (
                    <li key={index} id={index}>
                        <label htmlFor="checkbox">
                            <input id={index} onChange={() => onChecked(value.id)} name="checkbox"
                                   checked={value.checked} type="checkbox"/>
                        </label>

                        <img src={value.cover} alt=""/>

                        <div className="section__title">
                            <h3>{value.title}</h3>

                            {value.isNew && (
                                <span className="new">NEW</span>
                            )}
                        </div>

                        <div className="quality--container">
                            <p className="category">{value.categories}</p>
                        </div>

                        <p className={`quality--container`}>
                            <span
                                className={`quality ${["4K HDR", "4K", "HDR"].includes(value.bestQuality) ? "high" : ""}`}>{value.bestQuality}</span>
                        </p>

                    </li>
                ))}
            </div>
        </div>
    );
}

export default RowsView;
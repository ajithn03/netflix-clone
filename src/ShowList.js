import React from "react";
import  "./List.css";

const ShowList = (props) => {
    console.log(props)
    return(
        <div className="showlist">
        <p className="originals">Neflix Originals</p>
        <img className="bottom-image" src={props.list.data[1].image.original} alt="image" />
        <img className="bottom-image" src={props.list.data[2].image.original} alt="image" />
        <img className="bottom-image" src={props.list.data[3].image.original}  alt="image" />
        <img className="bottom-image" src={props.list.data[4].image.original}  alt="image" />
        <img className="bottom-image" src={props.list.data[5].image.original}  alt="image" />
        <img className="bottom-image" src={props.list.data[6].image.original}  alt="image" />
        <img className="bottom-image" src={props.list.data[7].image.original}  alt="image" />
        <img className="bottom-image" src={props.list.data[8].image.original}  alt="image" />
        <img className="bottom-image" src={props.list.data[9].image.original}  alt="image" />
        </div>
    );
}

export default ShowList;
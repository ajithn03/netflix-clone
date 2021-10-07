import React from "react";
import { Link } from "react-router-dom";
import  "./Detail.css";
import {BsPlayFill} from 'react-icons/bs'
import {GrCircleInformation} from 'react-icons/gr'


const ShowDetail = (props) => {
    console.log(props.detail.data[0].name)
    return(
        <div className="showdetial">
        <img className="top-image" src={props.detail.data[0].image.original}  alt="image" />
        <h1 className="netflix">Netflix</h1>
        <Link to="/"><button className="logout">Log out</button></Link>
        <div className="content3">
        <h1 className="name">{props.detail.data[0].name}</h1>
        <span><button className="btn"> <BsPlayFill />Play</button></span>
        <Link to="/episode"><span><button className="btn-1">More Information</button></span></Link>
        <p className="summary">{props.detail.data[0].summary}</p>
        </div>
        
        </div>
    );
}

export default ShowDetail;
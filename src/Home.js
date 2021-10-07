import React from "react";
import {Link} from 'react-router-dom'
import "./Home.css"

const Home = () => {
    return(
        <div className="home">
           <h1 className="title">Netflix</h1>
           <Link to="/shows"><p className="signin">Sign In</p></Link>
           <div className="content">
               <h1 className="content-1">Unlimited movies, Tv shows and more</h1>
                <p className="content-2">watch anywhere. cancel anytime.</p> 
                <Link to="/shows"><button className="btn1">Watch free for 30 days</button></Link>
           </div>
        </div>
    )
}

export default Home;


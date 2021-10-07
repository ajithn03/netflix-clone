import React from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router';
import './Base.css'
import ShowDetail from './ShowDetail';
import ShowList from './ShowList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shows: null };
    
  }

 componentDidMount = async () => {
    try {
        const resp = await axios.get('https://api.tvmaze.com/shows');
        console.log(resp)
        this.setState({shows:resp})
        console.log(this.state.shows);
    } catch (err) {
        console.error(err);
    }
};

render(){

  if(this.state.shows){
    return <div >
    <ShowDetail  detail = {this.state.shows}/>
    <ShowList list = {this.state.shows}/>
    </div>
  }
  if(!this.state.shows){
    return <div>loading..</div>
  }
}
}
export default App;
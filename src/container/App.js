import React from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import "./App.css";
import Scroll from "../component/Scroll";
import ErrorBoundries from "../component/ErrorBoundries";

class App extends React.Component{

    // Creating a state 
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : "",
        } 
        console.log("Constructor");
    }

    onSearchChange= (event)=>{

        this.setState({searchfield : event.target.value});
        console.log(event.target.value);
        }

    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(user=>this.setState({robots:user}));
        
        console.log("componentDidMount");
    }

    render(){
        console.log("Render");
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(
            robot => {return robot.name.toLowerCase().includes(searchfield.toLowerCase())});
        
         return (!robots.length) ? 
            (<h1>Loading</h1>):
            (
            <div className="tc">
            <h1 className="f2">Robot Friends</h1>

            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <ErrorBoundries>
                    <CardList  robots={filteredRobots}/>
                </ErrorBoundries>
            </Scroll>
            
            </div>
             );
        
    }

}

export default App;
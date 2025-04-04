import React, { Component } from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // onSearchChange(event) {
        // console.log(event.target.value) // target => element that triggered the event
        // const filteredRobots = this.state.robots.filter(robot => { // this refers SearchBox.jsx input, input does not have state => use arrow function 
    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value})   
        
    }
    
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        }) 
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }

}

export default App
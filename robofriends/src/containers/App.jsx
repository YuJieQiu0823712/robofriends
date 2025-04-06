import React, { Component } from 'react'
import CardList from '../components/CardList'
// import { robots } from './robots'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from './Scroll'



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
        
    }


    // onSearchChange(event) {
        // console.log(event.target.value) // target => element that triggered the event
        // const filteredRobots = this.state.robots.filter(robot => { // this refers SearchBox.jsx input, input does not have state => use arrow function 
    onSearchChange = (event) => { 
        this.setState({ searchfield: event.target.value})   
        
    }
    
    
    render() {
        const { searchfield, robots } = this.state // destructuring}
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        }) 
        return !robots.length ? // reobots.length === 0
             <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
    }
}

export default App



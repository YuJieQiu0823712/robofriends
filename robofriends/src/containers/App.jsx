import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from './Scroll'



function App () {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)


    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ robots: users }))
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users))
        console.log(count)
    }, [count]) 
    // [] means it will only run once when the component mounts, [count] means it will run when count changes


    
    const onSearchChange = (event) => { 
        setSearchfield(event.target.value)   
        
    }
    // const { searchfield, robots } = this.state // destructuring
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    }) 
    return !robots.length ? // reobots.length === 0
            <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <button onClick={() => setCount(count+1)}>Click Me</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        ) //onclick => arrow function that will be executed when the button is clicked.

}

export default App



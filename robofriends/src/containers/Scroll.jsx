import React from 'react'

const Scroll = (props) => {
    // console.log(props) // type: CardList
    return ( // first {} is javascript expression, seconde {} means this is an object, object can have css style
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}> 
            {props.children}
        </div>
    )
}

export default Scroll

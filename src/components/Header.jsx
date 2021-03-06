// Exercise 2: Set It Up
    // write a class component
    // make it a ul with a class name of Header
    // make four li: Catstagram, Home, About, Profile
    // put class name of Logo on the li element with GDInsta
    // export default the component!

// Exercise 6: Routing
    // import Link from react-router-dom
    // use the Link component to link to each route with a 'to' property
    // check that your links work!

import React from 'react';

class Header extends React.Component {
    render() {
        const headerItems = [
            {
                name: 'Catstagram',
                myclass: 'Catstagram'
            },
            {
                name: 'Home',
                myclass: 'Home'
            },
            {
                name: 'About',
                myclass: 'About'
            },
            {
                name: 'Profile',
                myclass: 'Profile'
            },
            {
                name: 'GDInsta',
                myclass: 'Logo'
            }
        ]
        return(
            <ul className="Header">
            { headerItems.map( ({ name, myclass }, index) => (
               <li key={index} className={myclass}>{name}</li> 
            ) )}
            </ul>
        )
    }
}

export default Header

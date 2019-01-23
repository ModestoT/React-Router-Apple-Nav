import React from 'react';

import Nav from './Nav';

function NavWrapper (props){
    return (
        <ul>
            {props.navItems.map(item => {
               return <Nav name={item.name} subNav={item.subNav} key={item.id}/>
            })}
        </ul>
    );
}

export default NavWrapper;
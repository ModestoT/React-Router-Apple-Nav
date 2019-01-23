import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

function NavWrapper (props){
    return (
        <ul>
            {props.navItems.map(item => {
               return <Link to={`/${item.name}`}><Nav name={item.name} subNav={item.subNav} key={item.id}/></Link>
            })}
        </ul>
    );
}

export default NavWrapper;
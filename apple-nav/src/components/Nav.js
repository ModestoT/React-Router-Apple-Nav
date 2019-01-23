import React from 'react';

import SubNav from './SubNav';

function Nav(props) {
    console.log(props)
    return (
        <li>
            {props.name}
            <ul>
                {/* {props.subNav.map((item, index) => {
                    return <SubNav name={item.name} key={index}/>
                })} */}
            </ul>
        </li>
    );
}

export default Nav;
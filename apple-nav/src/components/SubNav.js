import React from 'react';

function SubNav (props) {
    const item = props.navItems.find(
        item => `${item.name}` === props.match.params.name
    );
    console.log(item);
    return (
        <ul>
            {item.subNav.map(item => {
                return <li>{item.name}</li>
            })}
        </ul>
    );
}

export default SubNav;
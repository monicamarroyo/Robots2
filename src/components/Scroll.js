import React from 'react';
//functionality for scrolling and using resuable components with only functionality

const Scroll = (props) => {
    //props.children passes the carldList as is children
    return ( 
        <div style={{overflowY:'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}    
        </div>
    );
}

export default Scroll
import React from 'react';

const NoMatch = () => {
    const errorStyle = {
        color:'red',
        textAlign:'center',
        fontSize:'900',
        margin:'200px auto',
        border:'2px solid lightgray',
        boxShadow:'10px 10px 10px gray',
        width:'600px',
        height:'100px'
    }
    return (
        <div style={errorStyle}>
            <h1> Error 404!!! Sorry Page Not Found....</h1>
        </div>
    );
};

export default NoMatch;
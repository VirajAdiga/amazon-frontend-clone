import React from 'react';
import "./LeftSide.css"

function LeftSidePanel(props){
    return (
        <div className='LeftSide__main'>
            <div className='leftSide__header'>Brand</div>
            <div className='leftSide__brandname'>
                <label className='brandname'>
                    <input type='checkbox' value='Apple'/>Apple
                </label>
                <label className='brandname'>
                    <input type='checkbox' value='Samsung'/>Samsung
                </label>
                <label className='brandname'>
                    <input type='checkbox' value='MI'/>MI
                </label>
            </div>
        </div>
    );
}

export default LeftSidePanel;
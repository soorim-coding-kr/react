import React from 'react';

const Test4Animal = ({ani,changeAni}) => {
    return (
        <div>
            <label>동물 : </label>
            <input type="text" onChange={changeAni}/>
            <span style={{marginLeft:20}}>{ani}</span>
        </div>
    );
};

export default Test4Animal;
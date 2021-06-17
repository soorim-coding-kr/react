import React, { useRef, useState } from 'react';

const Test6 = () => {
    const [color, setColor] = useState('')
    const [text, setText] = useState('')

    const onColor = (e)  => {
        const {value} = e.target
        setText(value)
   
    }
    const onSelect = ()  => {
        setColor(text)
    }
    return (
        <div>
            <h2 style={{color:color}}>컬러선택</h2>
            <select onChange={onColor}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="skyblue">skyblue</option>
                <option value="tomato">tomato</option>
            </select>
            <button onClick={onSelect} > 선택 </button>
        </div>
    );
};

export default Test6;
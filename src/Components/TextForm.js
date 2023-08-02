import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText("hello");
    const handleUpClick = (event) =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleDownClick = (event) =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCapeClick = () =>{
        let newText = text[0].toUpperCase() + text.slice(1).toLowerCase();
        setText(newText)
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows={10} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert To Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleCapeClick}>Convert To Capitalize</button>
        </>

    )
}

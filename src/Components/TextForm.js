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
    const clearFunc = () =>{
        setText("");
    }
    const customLength = () =>{
        if (text === "") {
            return 0
        }
        return text.split(" ").length
    }
    let customValue = customLength();
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows={10} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert To Upper Case</button>
            <button className="btn btn-dark mx-1" onClick={handleDownClick}>Convert To Lower Case</button>
            <button className="btn btn-dark mx-1" onClick={clearFunc}>Clear</button>
        </div>
        <div className="container my-3">
            <h4>You text summary is here </h4>
            <p>words: {customValue} 🙂 characters: {text.length} 😉</p>
            <p>words time to read: {0.008 * text.split(" ").length} minutes</p>
            <h5>Preview</h5>
            <p>{text}</p>
        </div>
        </>

    )
}

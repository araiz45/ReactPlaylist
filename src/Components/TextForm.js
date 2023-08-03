import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText("hello");
    const handleUpClick = (event) => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleDownClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clearFunc = () => {
        setText("");
    }
    const customLength = () => {
        if (text === "") {
            return 0
        }
        return text.split(" ").length
    }
    let customValue = customLength();

    const handleTitleClick = () => {
        let para = '';
        let newText = text.split(" ");
        newText.forEach((value, i) => {
            if (value) {
                let newValue = value[0].toUpperCase() + value.slice(1).toLowerCase()
                para += newValue;
                if (i < newText.length - 1) {
                    para += " ";
                }
                setText(para);
            }
        })


    }

    const handleCopyClick = () => {

        if (text !== "") {
            navigator.clipboard.writeText(text).then(() => {
                
            }, (err) => {
                alert("failed");
            })
        }
    }

    const handleSpeechClick = () => {
        let value = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(value)
    }
    return (
        <>

            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows={10} value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={handleUpClick}>Convert To Upper Case</button>
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={handleDownClick}>Convert To Lower Case</button>
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={handleTitleClick}>Covert To Title Case</button>
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1 copy`} onClick={handleCopyClick}>Copy To Clipboard</button>
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={handleSpeechClick}>Text To Speech</button>
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-1`} onClick={clearFunc}>Clear</button>
            </div>
            <div className="container my-3">
                <h4 className="trans-p">{text.length > 0 ? 'You text summary is here ' : ''}</h4>
                <p className="trans-p">{text.length > 0 ? `words: ${customValue} 🙂` : ''}{text.length > 0 ? `characters: ${text.length} 😉` : ''}</p>
                <p className="trans-p">{text.length > 0 ? `words time to read: ${0.008 * text.split(" ").length} minutes` : ''}</p>
                <h5 className="trans-p">{text.length > 0 ? 'Preview' : ''}</h5>
                <p className="trans-p">{text}</p>
            </div>
        </>

    )
}

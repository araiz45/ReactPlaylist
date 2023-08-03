import React, { useState } from 'react'

export default function TextForm(props) {
    try {
        document.getElementById("change-li").classList.add("active");
        document.getElementById("change-li-about").classList.remove("active");
    } catch (error) {
        console.error(error)
    }
    const [text, setText] = useState('');
    if(text === ''){
        document.title = "TextUtils - Home";
    }
    // setText("hello");
    const handleUpClick = (event) => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to upper-case successfully", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        document.title = "TextUtils - Inserting...";
    }
    const handleDownClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been converted to lower-case successfully", "success")
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
                props.showAlert("Text has been converted to capitalize successfully", "success")

            }
        })


    }

    const handleCopyClick = () => {

        if (text !== "") {
            navigator.clipboard.writeText(text).then(() => {
                props.showAlert("Text has been copied successfully", "success")
            }, (err) => {
                alert("failed");
            })
        }
    }

    const handleSpeechClick = () => {
        let value = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(value)
        props.showAlert("Reading text loudly", "success")
        document.title = "TextUtils - Speaking";    
        
    }
    // document.title = "TextUtils - Araix";
    return (
        <>
            <div className="container container-sm">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows={10} value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <div className="btn-container" style={text.length > 0? {display: "block"} : {display: 'none'}}>
                    <button className={`my-btn btn m-1`} onClick={handleUpClick} style={{backgroundColor: props.color, color: "white", border: `2px solid ${props.color}`}}>Convert To Upper Case</button>
                    <button className={`my-btn btn m-1`} onClick={handleDownClick} style={{backgroundColor: props.color, color: "white", border: `2px solid ${props.color}`}}>Convert To Lower Case</button>
                    <button className={`my-btn btn m-1`} onClick={handleTitleClick} style={{backgroundColor: props.color, color: "white", border: `2px solid ${props.color}`}}>Covert To Title Case</button>
                    <button className={`my-btn btn m-1 copy`} onClick={handleCopyClick} style={{backgroundColor: props.color, color: "white", border: `2px solid ${props.color}`}}>Copy To Clipboard</button>
                    <button className={`my-btn btn m-1`} onClick={handleSpeechClick} style={{backgroundColor: props.color, color: "white", border: `2px solid ${props.color}`}}>Text To Speech</button>
                    <button className={`my-btn btn m-1`} onClick={clearFunc} style={{backgroundColor: props.color, color: "white", border: `2px solid ${props.color}`}}>Clear</button>
                </div>
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

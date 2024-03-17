
import React, { useState } from 'react'

export default function Form(props) {

  const handleClick = () => {
    console.log("UpperCase Was Clicked");
    let newText = Text.toUpperCase()
    SetText(newText)
  }

  const handleLoClick = () => {
    console.log("LowerCase Was Clicked");
    let newText = Text.toLowerCase();
    SetText(newText)
  }

  const handleCapitalClick = () => {
    console.log("Capital Case Was Clicked");
    let newText = Text.split(' ').map(word => word.charAt(0).toUpperCase()  + word.slice(1) ).join(' ');
    SetText(newText);
  }
  
  const handleOnChange = (event) => {
    console.log("ON CHANAGE IS BEEN CLICKED 🧑‍💻🧑‍💻");
    SetText(event.target.value)
  }

  const [Text, SetText] = useState("Enter Your Text here");
  return (
    <>
      <div className='container'>
        <h1 className='my-5'   style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3"  style={{color: props.mode==='dark'?'white':'black'}}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"  style={{color: props.mode==='dark'?'white':'black' , backgroundColor : props.mode=== 'dark'?'grey': 'white'}}/>
        </div>
        <button disabled = {Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Convert To Upper Case</button>
        <button disabled = {Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lower Case</button>
        <button disabled = {Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalClick}>Convert To new Case</button>
      </div>

      <div className="container my-5"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{Text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Words and {Text.length} Alphabets</p>
        <p>{0.008 * Text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes To Read</p>
        <h2>Preview</h2>
        <p> {Text.length > 0 ? Text : "Please Enter Something in text area to get the preview"}</p>
      </div>
    </>
  )
}

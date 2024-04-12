import React,{useState} from 'react'

export default function TextForm(props) {
    const handelUpClick= () =>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelClearClick= () =>{
        //console.log("uppercase was clicked" + text);
        let newText = ("");
        setText(newText);
    }
    const handelDelClick= () =>{
        //console.log("uppercase was clicked" + text);
        if(text.length > 0)
        {
            const newText= text.slice(0,-1);
            setText(newText);
        }
    }
    const handelLoClick= () =>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handelOnchange = (event) =>{
       // console.log("on change");
        setText(event.target.value)
    }

    const[text,setText]=useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handelOnchange} id="mybox" rows="8"></textarea>
</div>
 
 <button type="button" className="btn btn-success mx-2" onClick={handelUpClick} > convert to uppercase</button>
 <button type="button" className="btn btn-primary mx-2" onClick={handelLoClick} > convert to LOwercase</button>
 <button type="button" className="btn btn-primary mx-2" onClick={handelDelClick} > Delete</button>
 <button type="button" className="btn btn-primary mx-2" onClick={handelClearClick} > Clear</button>
    </div>
    <div className="container">
        <h1>your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

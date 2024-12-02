import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  const UpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to Uppercase", "success");
  };
  const LowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to Lowercase", "success");
  };
  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared", "success");
  };
  const CopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied to clipboard", "success");
  };
  const RemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces removed from text", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === `light` ? `black` : `white`,
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control mb-3"
            value={text}
            onChange={onChangeHandler}
            id="textArea"
            rows="8"
            style={{
              backgroundColor: props.mode === `dark` ? `#2a4e83` : `white`,
              color: props.mode === `dark` ? `white` : `black`,
            }}
          ></textarea>
          <button disabled = {text.length===0} className="btn btn-primary mx-3 my-2" onClick={UpperCase}>
            Convert to Uppercase
          </button>
          <button disabled = {text.length===0} className="btn btn-primary mx-3 my-2" onClick={LowerCase}>
            Convert to Lowercase
          </button>
          <button disabled = {text.length===0} className="btn btn-primary mx-3 my-2" onClick={ClearText}>
            Clear Text
          </button>
          <button disabled = {text.length===0} className="btn btn-primary mx-3 my-2" onClick={CopyText}>
            Copy Text
          </button>
          <button disabled = {text.length===0} className="btn btn-primary mx-3 my-2" onClick={RemoveExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === `light` ? `black` : `white`,
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => { return element.length !== 0; }).length }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0; }).length} Minutes read</p>
      </div>
    </>
  );
}

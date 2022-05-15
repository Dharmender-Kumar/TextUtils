import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("Upper case" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelLowClick = () => {
    // console.log("Upper case" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelUndoClick = () => {
    // console.log("Upper case" + text);
    var lastIndex = text.lastIndexOf(" ");
    let newText = text.substring(0, lastIndex);
    setText(newText);
  };
  const handelClearClick = () => {
    // console.log("Upper case" + text);
    let newText = "";
    setText(newText);
  };
  const handelTitleClick = () => {
    // console.log("Upper case" + text);
    let newText = text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    setText(newText);
  };
  //   state updation
  const handelOnChange = (event) => {
    // console.log("change ");
    setText(event.target.value);
  };
  //extraspace
  const hanldelExtraspaces = (event) => {
    // console.log("change ");
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
  //compy
  const handelCopy = (event) => {
    // console.log("change ");
    let newtext = document.getElementById("myBox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Text has been copied to clipboard!!", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            placeholder="Enter text here"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle  mx-1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Case
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item primary" onClick={handelUpClick}>
              Convert To Uppercase
            </button>
          </li>
          <li>
            <button className="dropdown-item primary" onClick={handelLowClick}>
              Convert To LowerCase
            </button>
          </li>
          <li>
            <button
              className="dropdown-item primary"
              onClick={handelTitleClick}
            >
              Convert To Title
            </button>
          </li>
        </ul>
        <button className="btn btn-danger mx-1" onClick={handelClearClick}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-1" onClick={handelUndoClick}>
          undo
        </button>
        <button className="btn btn-primary mx-1" onClick={hanldelExtraspaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handelCopy}>
          Copy
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.length > 0
            ? text.replace(/(^\s*)|(\s*$)/gi, "").split(" ").length
            : 0}{" "}
          word and {text.replace(/\s/g, "").length} characters
        </p>
        <p>
          {0.008 *
            (text.length > 0
              ? text.replace(/(^\s*)|(\s*$)/gi, "").split(" ").length
              : 0)}{" "}
          minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something to Preview "}</p>
      </div>
    </>
  );
}

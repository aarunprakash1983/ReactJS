import React from "react";
import './mycss.css';

export class Cls1 extends React.Component
{
    render() {
        console.log("Testing individual component")
        return (
        <div>
        <h1>Hello class 1!!!...</h1>
        <h3>1. PLAIN CSS STYLESHEET FILE</h3>
        <p>Styles are imported from a external CSS File</p>
        <div className="CSSDemo">
            <p className="CSSDemo_content">PLAIN CSS STYLESHEET FILE</p>
        </div>
        </div>
        );
      }
}

export const DottedBox = () => (
    <div className="DottedBox">
      <p className="DottedBox_content">Get started with CSS styling</p>
    </div>
  );
  
const colorarray = ["red","yellow","white"];
const finalarray = colorarray.map (e => <li>{e}</li>);

export class Cls2 extends React.Component
{
    render() {
        console.log("sorting array")
        return <ul>{finalarray}</ul>;
      }
}




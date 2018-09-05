import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as m from "./math";
import HelloJS from "./hello";
import {Cls1,Cls2,DottedBox} from "./Component/Cls1";
import {Clock} from "./Component/clock";
import InlineCSS from "./Component/InlineCSS";
import {Counter} from "./Component/counter";
import {ToDoApp} from "./Component/style";
import {Greeting} from "./Component/proptypes";
import {Reservation} from "./Component/reservation";
import {FormContainer} from "./Component/formcontainer";
import './styles.css'
import './spectre.min.css';
import BasicExample from "./Component/route"; 
import Root from "./Component/navlink";

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

export default Box;

function Hello()
    {
      return <h1>Hello Method!!!...</h1>;
    }

    class Hello1 extends React.Component {
        render() {
          console.log(this.props)
          return <h1>Hello{this.props.name}!!!...</h1>;
        }
      }
      const jsx2 =<div>
                  <div>
                    <Hello1 name="Arun Prakash" />
                    <Hello/>
                    <Cls1/>
                    <Cls2></Cls2>
                    <Clock />
                    <Counter/>
                    <DottedBox/>
                    <InlineCSS/>
                    <ToDoApp/>
                    <Greeting name="testing"/>  
                    <Reservation/>
                   
                  </div>
                   <div className="container">
                   <div className="columns">
                     <div className="col-md-9 centered">
                       <h3>React.js Controlled Form Components</h3>
                       <FormContainer />
                     </div>
                   </div>
                 </div>
                 <div>
                    <BasicExample/>
                 </div>
                 <div>loading...<Root/></div>
                  < footer>
                    <hr />
                    Note: 
                    The <b>active class</b> should be declared after <b>default class</b>.
                  </footer>
                 </div>
                 ;
      ReactDOM.render(jsx2,document.getElementById('root'));

      console.log(m.add(10,20));
      console.log(m.subtract(50,20));
      console.log(m.PI);
      HelloJS();
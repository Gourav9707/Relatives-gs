import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    relative=["Sujal","Rajesh","Amit","Ankit"]
    render() {
        return(
           <ol key="relativeList">
               {this.relative.map( (relatives,index) => (
               <li key={`relativeListItem${index+1}`}>relatives</li>
                ))}
	        </ol>
        )
    }
}


export default App;

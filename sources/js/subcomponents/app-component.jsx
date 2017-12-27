import React, {Component} from "react";
import {BoxComponent} from "./box-component";

export class AppComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <BoxComponent
          width="1410px"
          height="820px"
          offsetY="50px"
          offsetX="42px"
        />
        <BoxComponent
          width="1410px"
          height="150px"
          offsetY="900px"
          offsetX="42px">
        </BoxComponent>
        <BoxComponent
          width="400px"
          height="420px"
          offsetY="630px"
          offsetX="1480px"
          borderWidth="10px"
        />
      </div>
    );
  }
}
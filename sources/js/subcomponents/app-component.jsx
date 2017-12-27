import React, {Component} from "react";
import {BoxComponent} from "./box-component";
import {NPListComponent} from "./nplist-component";

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
          <NPListComponent
            text="♪♫ Now playing janna themed music ♪♫"
          />
        </BoxComponent>
        <BoxComponent
          width="191px"
          height="203px"
          offsetY="649px"
          offsetX="1510px"
          borderWidth="10px"
        />
      </div>
    );
  }
}
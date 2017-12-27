import React, {Component} from "react";

export class NPListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="NPList">
        {this.props.text ? this.props.text : ""}
      </div>
    );
  }
}
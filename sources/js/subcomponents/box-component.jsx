import React, {Component} from "react";

export class BoxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="Box"
           style={{
             width: this.props.width,
             height: this.props.height,
             top: this.props.offsetY,
             left: this.props.offsetX,
             borderWidth: this.props.borderWidth ? this.props.borderWidth : "30px"
           }}>
      </div>
    );
  }
}
import React, {Component} from "react";
import {BoxComponent} from "./box-component";
import {GifComponent} from "./gif-component";
import {YoutubeComponent} from "./youtube-component";

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
          <YoutubeComponent
            video_link="https://www.youtube.com/watch?t=00m30s&v=dv13gl0a-FA#title"
            sound_only={true}
          />
        </BoxComponent>
        <BoxComponent
          width="191px"
          height="203px"
          offsetY="649px"
          offsetX="1510px"
          borderWidth="10px"
        />
        <BoxComponent
          width="250px"
          height="250px"
          offsetY="390px"
          offsetX="1487px"
          borderWidth="0px">
          <GifComponent
            keyword="bunny"
          />
        </BoxComponent>
      </div>
    );
  }
}
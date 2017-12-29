import React, {Component} from "react";
import axios from "axios";
import Settings from "../settings";

export class YoutubeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: this.props.video_link,
      video: null
    };
  }
  componentDidMount() {
    // Parse video link
    let video_url = this.props.video_link.split('#')[0];
    if (video_url.indexOf('?') === -1) {
      // State invalid link -- none playing
      this.setState({video: false});
      console.log('Invalid link (Missing part after "?" where video ID is)');
      return;
    }
    let video_querystring = video_url.split('?')[1];
    let video_params = video_querystring.split('&').map((param_str) => param_str.split('='));
    let video_id_param = video_params.find((param) => param[0] === 'v');
    if (!video_id_param) {
      // State invalid link -- none playing
      this.setState({video: false});
      console.log('Invalid link (Missing "v={{VIDEO_ID}}" -part)');
      return;
    }
    let video_id = video_id_param[1];

    // Get video metadata
    axios.get(Settings.YT_VID_METADATA_BY_VID_ID(video_id))
      .then((response) => {
        if (response.data.items.length === 0) {
          // State invalid link -- none playing
          this.setState({video: false});
          console.log('Unable to load video (metadata). Try another video_id.');
          return;
        }
        let video_metadata = response.data.items[0];
        let video = {
          id: video_id,
          title: video_metadata.snippet.title,
          thumbnail: video_metadata.snippet.thumbnails.default.url,
          tags: video_metadata.snippet.tags,
          duration: video_metadata.contentDetails.duration.slice(2)
        };
        // State ready - start playing
        this.setState({video: video});
      })
      .catch((error) => {
        console.log(error);
      });//zA52uNzx7Y4
  }
  render() {
    return (
      <div className="Youtube">
        {
          !this.state.link ?
            <div>No video playing - please input</div>
            :
            this.state.video === null ?
              <div>Video loading . . .</div>
              :
              this.state.video === false ?
                <div>Could not load the video. :( Try another link.</div>
                :
                <div className="Youtube__now-playing NowPlaying">
                  <div className="NowPlaying__icon">
                    <img src={this.state.video.thumbnail}/>
                  </div>
                  <div className="NowPlaying__details">
                    <div className="NowPlaying__details-title">
                      <div className="Static">Now Playing:&nbsp;({this.state.video.duration.toLowerCase()})&nbsp;</div>
                      <div className="Scrolling">
                        <div className="Scrolling__contents">
                          {this.state.video.title}
                        </div>
                      </div>
                    </div>
                    <div className="NowPlaying__details-tags">
                      {this.state.video.tags
                        .map((tag) => '#' + tag.replace(/\s/g, '_') + ' ')}
                    </div>
                  </div>
                  <div className="NowPlaying__video-iframe">
                    <iframe type="text/html"
                            width="120"
                            height="90"
                            style={{visibility: this.props.sound_only ? "hidden" : "visible"}}
                            src={`https://www.youtube.com/embed/${this.state.video.id}`
                                + `?autoplay=1`
                                + `&iv_load_policy=3`
                                + `&rel=0`}
                            frameborder="0">
                    </iframe>
                  </div>
                </div>
        }
      </div>
    );
  }
}
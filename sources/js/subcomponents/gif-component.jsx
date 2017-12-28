import React, {Component} from "react";
import axios from "axios";
import Settings from '../settings';

export class GifComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_id: null,
      loading: false
    };
    this.loadEmbedUrl(props.keyword);
  }
  loadEmbedUrl(keyword) {
    this.setState({loading: true});
    axios.get(Settings.GIF_BY_KEYWORD(keyword))
      .then((response) => {
        this.setState({
          image_id: response.data.data.id,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false});
      })
  }
  componentWillReceiveProps(next_props) {
    if (loading) {
      return;
    }
    if (this.props.keyword !== next_props.keyword) {
      this.loadEmbedUrl(next_props.keyword);
    }
  }
  render() {
    return (
      this.state.image_id ?
        <div className="Gif">
          <iframe
            className="Gif_content giphy-embed"
            onMouseEnter={(e) => {return this.loading ? null : this.loadEmbedUrl(this.props.keyword);}}
            src={"https://giphy.com/embed/"+this.state.image_id}
            width="250"
            height="250"
            frameBorder="0">
          </iframe>
          <p className="Gif__keyword">
            {
              this.props.keyword
                .split(' ')
                .filter(splitstr => splitstr !== '')
                .map(kw => '#'+kw)
                .join(' ')
            }
          </p>
        </div>
        :
        "Loading.."
    );
  }
}
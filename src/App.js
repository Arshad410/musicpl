import React,{Component} from 'react';
import Search from './component/Search';
import Artist from './component/Artist';
import Track from './component/Track';
const URI = "https://spotify-api-wrapper.appspot.com";

class App extends Component{

  state = {
    artistInfo: null,
    tracks: []
  };

  componentDidMount(){
    this.searchArtist("A R Rehman");
  }
  searchArtist =(name) => {
    fetch(`${URI}/artist/${name}`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      if(result.artists.total > 0){
        const artistInfo = result.artists.items[0];
        
        this.setState({
          artistInfo
        });

        fetch(`${URI}/artist/${artistInfo.id}/top-tracks`)
        .then(response => response.json())
        .then(result => {
          console.log("Tracks", result.tracks);
          this.setState({
            tracks: result.tracks
          });

        })
        .catch(err => console.log(err.message));
      }
    })
    .catch(err => console.log(err.message));
  }
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 well text-center ">
            <h1>Music Player</h1>
          </div>
        </div>
        <Search search={this.searchArtist}/>
        <Artist artist={this.state.artistInfo}/>
        <Track tracks={this.state.tracks}/>
      </div>
    );
  }
}

export default App;

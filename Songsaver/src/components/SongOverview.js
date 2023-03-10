import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import SongFilter from "./SongFilter";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      allSongs: [],
    };
  }

  addSong = (song) => {
    this.setState((prevState) => {
      const newList = prevState.songs.concat(song);
      prevState.allSongs = newList;

      return {
        songs: newList,
      };
    });
  };

  removeSong = (id) => {
    this.setState((prevState) => {
      const songs = prevState.songs;
      const newList = songs.filter((song) => songs.indexOf(song) !== id);
      prevState.allSongs = newList;

      return {
        songs: newList,
      };
    });
  };

  filterGenre = (event) => {
    this.setState((prevState) => {
      const songs = prevState.allSongs;
      const genre = event.target.value;
      const newList = songs.filter((song) => song.genre === genre);
      return {
        songs: newList,
      };
    });
  };

  filterRating = (event) => {
    this.setState((prevState) => {
      const songs = prevState.allSongs;
      const rating = event.target.value;
      const filteredList = songs.filter((song) => song.rating === rating);
      return {
        songs: filteredList,
      };
    });
  };

  render() {
    return (
      <div className="song-overview">
        <SongForm onSubmit={this.addSong} />
        <SongFilter
          songs={this.state.songs}
          onFilterGenre={this.filterGenre}
          onFilterRating={this.filterRating}
        />
        <table className="song-table">
          <tbody>
            <tr className="song-header">
              <th className="column-song">Song</th>
              <th className="column-artist">Artist</th>
              <th className="column-genre">Genre</th>
              <th className="column-rating">Rating</th>
              <th className="column-remove"></th>
            </tr>
          </tbody>
          <SongList
            className="song-list"
            songs={this.state.songs}
            handleClick={this.removeSong}
          />
        </table>
      </div>
    );
  }
}

export default SongOverview;

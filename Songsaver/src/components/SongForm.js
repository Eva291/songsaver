import React from "react";

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Song",
      artist: "Artist",
      genre: "Genre",
      rating: "Rating",
    };
  }

  render() {
    const titleInput = (event) => {
      this.setState({
        title: event.target.value,
      });
    };

    const artistInput = (event) => {
      this.setState({
        artist: event.target.value,
      });
    };

    const genreInput = (event) => {
      this.setState({
        genre: event.target.value,
      });
    };

    const ratingInput = (event) => {
      this.setState({
        rating: event.target.value,
      });
    };

    const onSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state);
    };

    return (
      <div className="songForm">
        <form className="form" onSubmit={onSubmit}>
          <input
            className="inputItem"
            placeholder={this.state.title}
            type="text"
            onInput={titleInput}
          />

          <input
            className="inputItem"
            placeholder={this.state.artist}
            type="text"
            onInput={artistInput}
          />

          <select
            value={this.state.genre}
            className="inputItem"
            name="genre"
            onChange={genreInput}
          >
            <option value="choose">Genre</option>
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
            <option value="rock">Rock</option>
            <option value="hiphop">Hip-Hop</option>
            <option value="disco">Disco</option>
          </select>

          <select
            className="inputItem"
            value={this.state.rating}
            name="rating"
            onChange={ratingInput}
          >
            <option value="choose">Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input className="addButton" value="Add song" type="submit" />
        </form>
      </div>
    );
  }
}

export default SongForm;

import React from "react";
import SongItem from "./SongItem";

function SongList(props) {
  const songs = props.songs;
  const savedSongs = songs.map((song, index) => {
    return (
      <SongItem
        key={index}
        id={index}
        title={song.title}
        artist={song.artist}
        genre={song.genre}
        rating={song.rating}
        handleClick={props.handleClick}
      />
    );
  });

  return <tbody>{savedSongs}</tbody>;
}

export default SongList;

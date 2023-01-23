import React from "react";

function SongItem(props) {
  return (
    <tr className="listed-song" value={props.title} id={props.id}>
      <td>{props.title}</td>
      <td>{props.artist}</td>
      <td>{props.genre}</td>
      <td>{props.rating}</td>
      <td>
        <button
          className="deleteButton"
          onClick={() => props.handleClick(props.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default SongItem;

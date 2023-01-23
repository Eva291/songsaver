import React from "react";

function SongFilter(props) {
  return (
    <div className="songfilter">
      <form>
        <select
          className="filterSelection"
          defaultValue="default"
          name="genre"
          onChange={props.onFilterGenre}
        >
          <option value="filter">Filter by genre</option>
          <option value="rock">Rock</option>
          <option value="dance">Dance</option>
          <option value="lounge">Lounge</option>
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
        </select>

        <select
          className="filterSelection"
          defaultValue="default"
          name="rating"
          onChange={props.onFilterRating}
        >
          <option value="fliter">Filter by rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
    </div>
  );
}

export default SongFilter;

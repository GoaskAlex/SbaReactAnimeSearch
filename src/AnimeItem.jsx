import React from "react";

function AnimeItem(props) {
  return (
    <>
      <div className="card">
        <img src={props.images.jpeg.image_url} />
        <div className="info">
          <h2>{props.title}</h2>
          <p>{props.background}</p>
        </div>
        <div className="about">
          <h2>{props.synopsis}</h2>
          <p>{props.score}</p>
          <img src={props.images.jpeg.small_image_url} />
          <a href="https://www.youtube.com/watch?v=d6ye7BSkxuk">
            Watch Preview
          </a>
        </div>
      </div>
    </>
  );
}

export default AnimeItem;

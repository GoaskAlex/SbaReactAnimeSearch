import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import axios from "axios";

function AnimeApi() {
  const [endPoint, setEndPoints] = useState("");
  const [container, setContainer] = useState(null);

  const fetchName = async () => {
    try {
      Axios.get(`https://api.jikan.moe/v4/anime?q=${endPoint}`);
      const res = await axios(`https://api.jikan.moe/v4/anime?q=${endPoint}`);
      setContainer(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error.res);
    }
  };
  //////////////////////////////////
  useEffect(() => {
    fetchName();
  }, []);
  //////////////////////////////////
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Anime Search</h1>
          <h4>Find The Show For You</h4>
        </div>

        <div>
          <div className="searchBox">
            <input
              className="search-bar"
              type="text"
              onChange={(e) => {
                setEndPoints(e.target.value);
              }}
              placeholder="Devil Man"
            />
            <button onClick={fetchName}>🔍</button>
          </div>
        </div>
        <div>
          {container?.map((item) => {
            return (
              <>
                <div className="container">
                  <div className="card-container">
                    <article className="card-article">
                      <img
                        className="card-img"
                        src={item.images.jpg.image_url}
                      />
                      <div className="card-data">
                        <h2 className="card-title">{item.title}</h2>
                        <span className="card-description">
                          {item.synopsis}
                        </span>
                        <a href="#" className="card-btn">
                          read more
                        </a>
                      </div>
                    </article>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default AnimeApi;

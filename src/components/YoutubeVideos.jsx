import React from "react";
import { useEffect, useState } from "react";

function YoutubeVideos() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&key=AIzaSyDbm7JlxhEb-jemd3vUj3pmR5jd2nPDF5A"
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutubeVideos(data.items);
      });
  }, []);

  return (
    //   <div>YoutubeVideos</div>
    <div className="container my-5">
      <h2 className="text-center mb-4">Latest Videos</h2>
      <div className="row row-cols-1 row-cols-lg-2 gy-4">
        {youtubeVideos?.map((singleVideo, i) => {
          return (
            <div className="col" key={i}>
              <div className="card h-100">
                <a
                  href={`https://www.youtube.com/watch?${singleVideo.id.videoId}`}
                  target="_blank"
                >
                  <img
                    src={singleVideo.snippet.thumbnails.high.url}
                    className="card-img-top"
                    alt={`Video ${i}`}
                  />
                </a>
                <div className="card-body">
                  <p className="card-text">{singleVideo.snippet.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YoutubeVideos;

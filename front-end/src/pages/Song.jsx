import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );
  // console.log(songsArrayFromArtist)

  const currentIndex = songsArrayFromArtist.findIndex(
    (song) => song._id === id
  );

  const nextIndex = (currentIndex + 1) % songsArrayFromArtist.length;
  const nextId = songsArrayFromArtist[nextIndex]._id;

  const prevIndex =
    (currentIndex - 1 + songsArrayFromArtist.length) %
    songsArrayFromArtist.length;
  const prevId = songsArrayFromArtist[prevIndex]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Image da musica ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Image do Cantor ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          prevId={prevId}
          nextId={nextId}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;

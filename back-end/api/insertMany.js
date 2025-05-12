import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongsObj) => {
  const newSongstObj = { ...currentSongsObj };
  delete newSongstObj.id;

  return newSongstObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtist = await db
  .collection("artists")
  .insertMany(newArtistArray);

// console.log(newSongsArray);

console.log(responseSongs);
console.log(responseArtist);

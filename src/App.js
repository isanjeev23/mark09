import "./styles.css";
import React, { useState } from "react";

let movieDB = {
  Fictional: [
    {
      name: "Sita Ramam",
      rating: 8.6,
      description:
        "An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them."
    },
    {
      name: "Andhadhun",
      rating: 8.2,
      description:
        "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of."
    },
    {
      name: "Drishyam",
      rating: 8.2,
      description:
        "Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime."
    }
  ],

  "Crime Drama": [
    {
      name: "Shor in the City",
      rating: 7.2,
      description:
        "In the city of Mumbai, an NRI businessman, a minor criminal and an aspiring cricketer grapple with life-changing choices during the chaotic period of the festival of Ganesh Chaturth."
    },
    {
      name: "Shootout at Lokhandwala",
      rating: 7.1,
      description:
        "An account of the gangster Mahindra Dolas and his gang, which terrorized Mumbai City, and a massive war between Mumbai Police and gangs during 16 November 1991."
    },
    {
      name: "Madras Cafe",
      rating: 7.6,
      description:
        "An Indian intelligence agent journeys to a war-torn coastal island to break a resolute rebel group and meets a passionate journalist."
    }
  ],

  "Sci-Fiction": [
    {
      name: "Interstellar",
      rating: 8.6,
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      name: "The Peripheral",
      rating: 7.8,
      description:
        "Set in the future when technology has subtly altered society, a woman discovers a secret connection to an alternate reality as well as a dark future of her own."
    },
    {
      name: "Passengers",
      rating: 7.0,
      description:
        "A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early."
    }
  ]
};

let movieGenres = Object.keys(movieDB);

export default function App() {
  const [selectedGenre, setGenre] = useState("Fictional");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎬 Movie Recomendation App </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {movieGenres.map((genre, index) => {
          return (
            <button
              key={index}
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid white",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}>
                Rating : {movie.rating}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {movie.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

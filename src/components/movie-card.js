import * as React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  return (
    <Card key={movie.imdbID} className="card">
      <Card.Img className="card-img" variant="top" src={movie.Poster} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">
          <Link className="card-link" to={`/movie/${movie.imdbID}`}>
            {movie.Title}
          </Link>
          <Card.Text>{movie.Year}</Card.Text>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

import * as React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import type { MovieSearchResult } from "../shared/types-flow";

import "./movie-card.scss";

type Props = {
  movie: MovieSearchResult,
};

// FIXME: how is this type going to be fixed by the flow-to-ts tool?
export const MovieCard: React.FC<Props> = ({
  movie,
}) => {
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

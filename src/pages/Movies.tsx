import data from '../MovieDataSample.json';
import data2 from '../MovieData.json';
import { useState } from 'react';

const mds = data.MovieDataSample;
const mds2 = data2.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(mds2);

  const addMovie = () => {
    setListOfMovies([
      ...mds2,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

  return (
    <div className="p-4">
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <table className="table border table-bordered table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited?</th>
          </tr>
        </thead>
        <tbody>
          {listOfMovies.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addMovie}>
        ClickMe
      </button>
      <p>
        This button adds Batman Returns! I thought I would keep it for fun :)
      </p>
    </div>
  );
}

export default MovieList;

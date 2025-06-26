import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function CarSearchPage(){

const CarSearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/cars', {
        params: { search: query },
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Search Form */}
        <div className="col-md-4">
          <form onSubmit={handleSearch} className="request-form bg-dark p-4 rounded">
            <h2 className="text-white mb-4">Find Vehicle</h2>
            <div className="form-group">
              <label className="label text-white">Search Vehicle</label>
              <input
                type="text"
                className="form-control"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Vehicle name"
              />
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-light py-3 px-4 w-100">
                {loading ? 'Searching...' : 'SEARCH'}
              </button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        <div className="col-md-8 d-flex align-items-center">
          <div className="services-wrap rounded-right w-100 p-4 bg-light">
            <h3 className="heading-section mb-4">Search Results</h3>
            <ul className="list-unstyled">
              {results.length > 0 ? (
                results.map((car) => (
                  <li key={car.id} className="mb-2">
                    <Link to={`/car/${car.id}`}>{car.name}</Link>
                  </li>
                ))
              ) : (
                <li className="text-muted">No results found</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

}
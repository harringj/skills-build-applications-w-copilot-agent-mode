
import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Workouts</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card shadow">
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  {workouts.length > 0 && Object.keys(workouts[0]).map((key) => (
                    <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout, idx) => (
                  <tr key={workout.id || idx}>
                    {Object.values(workout).map((val, i) => (
                      <td key={i}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-primary mt-3" type="button" onClick={() => window.location.reload()}>
              Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workouts;
